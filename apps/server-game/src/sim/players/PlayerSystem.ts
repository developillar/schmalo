import type RAPIERModule from '@dimforge/rapier3d-compat';
import { PLAYER } from '@schmalo/shared';
import type { InputPayload } from '@schmalo/shared';
import { MOVEMENT, stepVelocity, type MoveState } from '@schmalo/sim';
import type { PlayerManager } from './PlayerManager';
import type { PlayerRuntimeState } from './PlayerState';
import type { CombatSystem } from './CombatSystem';
import type { VehicleSystem } from '../vehicles/VehicleSystem';
import type { SandboxRoomState } from '../world/GameState';

const GROUND_PROBE = PLAYER.STANDING_HEIGHT / 2 + 0.08;

export class PlayerSystem {
  private vehicles?: VehicleSystem;

  constructor(
    private readonly rapier: typeof RAPIERModule,
    private readonly world: RAPIERModule.World,
    private readonly players: PlayerManager,
    private readonly state: SandboxRoomState,
    private readonly combat: CombatSystem,
  ) {}

  attachVehicles(vehicles: VehicleSystem): void {
    this.vehicles = vehicles;
  }

  enqueueInput(sessionId: string, input: InputPayload): void {
    const player = this.players.get(sessionId);
    if (!player) return;
    player.inputs.push(input);
  }

  step(dt: number): void {
    for (const player of this.players.values()) {
      if (!player.vitals.alive) {
        this.stepDead(player, dt);
        continue;
      }

      for (const input of player.inputs.splice(0)) {
        if (player.vehicleSeat) {
          // Seated: movement/keys become vehicle controls; the
          // passenger keeps their own weapon usable.
          player.yaw = input.yaw;
          player.pitch = input.pitch;
          player.lastProcessedInput = input.seq;
          if (player.vehicleSeat === 'passenger') this.combat.handleInput(player, input);
          this.vehicles?.handleSeatedInput(player, input);
          continue;
        }
        this.applyInput(player, input, dt);
        if (input.use) this.vehicles?.tryBoard(player);
        this.combat.handleInput(player, input);
      }

      this.combat.tickPlayer(player, dt);
      this.syncSnapshot(player);
    }
  }

  private stepDead(player: PlayerRuntimeState, dt: number): void {
    if (player.vehicleSeat) this.vehicles?.exit(player);
    // Keep acking inputs so the client's prediction buffer drains.
    for (const input of player.inputs.splice(0)) {
      player.lastProcessedInput = input.seq;
    }
    player.respawnTimer -= dt;
    if (player.respawnTimer <= 0) {
      this.players.respawn(player);
    }
    this.syncSnapshot(player);
  }

  private applyInput(player: PlayerRuntimeState, input: InputPayload, dt: number): void {
    const body = player.body;
    const vel = body.linvel();
    const t = body.translation();

    // Grounded probe: ray straight down from the capsule center against
    // anything but ourselves (floor, ramps, platforms, props).
    const ray = new this.rapier.Ray({ x: t.x, y: t.y, z: t.z }, { x: 0, y: -1, z: 0 });
    const hit = this.world.castRay(ray, GROUND_PROBE, true, undefined, undefined, undefined, body);
    const onGround = hit !== null && player.velY <= 0.001;

    if (onGround) {
      if (!player.grounded) player.velY = 0;
      player.grounded = true;
      player.coyoteTimer = 0;
    } else if (player.grounded) {
      // Just left the ground (jump handles its own flag flip below).
      player.grounded = false;
      player.coyoteTimer = 0;
    } else if (player.coyoteTimer !== Infinity) {
      player.coyoteTimer += dt;
    }

    const jumpPressed = input.jump && !player.prevJumpHeld;
    player.prevJumpHeld = input.jump;

    const move: MoveState = {
      position: { x: t.x, y: t.y, z: t.z },
      velocity: { x: vel.x, y: player.velY, z: vel.z },
      grounded: player.grounded,
      crouched: player.crouched,
      coyoteTimer: player.coyoteTimer,
    };
    stepVelocity(move, { ...input, jump: jumpPressed }, dt);

    // Manual velocity-verlet gravity: the body's linvel carries the
    // midpoint velocity so Rapier's position integration samples the
    // exact ballistic arc (matching the headless-tested apex).
    let vyNew = move.velocity.y;
    let vyMid = vyNew;
    if (!move.grounded) {
      const g = MOVEMENT.GRAVITY * (vyNew < 0 ? MOVEMENT.FALL_MULTIPLIER : 1);
      vyMid = vyNew - 0.5 * g * dt;
      vyNew = vyNew - g * dt;
    }

    body.setLinvel({ x: move.velocity.x, y: vyMid, z: move.velocity.z }, true);
    player.velY = vyNew;
    player.grounded = move.grounded;
    player.coyoteTimer = move.coyoteTimer;
    player.crouched = move.crouched;
    player.yaw = input.yaw;
    player.pitch = input.pitch;
    player.lastProcessedInput = input.seq;
    player.meleeCooldown = Math.max(0, player.meleeCooldown - dt);
  }

  private syncSnapshot(player: PlayerRuntimeState): void {
    const snapshot = this.state.players.get(player.sessionId);
    if (!snapshot) return;

    const pos = player.body.translation();
    const vel = player.body.linvel();
    snapshot.position.set(pos.x, pos.y, pos.z);
    snapshot.velocity.set(vel.x, player.velY, vel.z);
    snapshot.yaw = player.yaw;
    snapshot.pitch = player.pitch;
    snapshot.grounded = player.grounded;
    snapshot.crouched = player.crouched;
    snapshot.ackSeq = player.lastProcessedInput;

    snapshot.shield = player.vitals.shield;
    snapshot.health = player.vitals.health;
    snapshot.alive = player.vitals.alive;
    snapshot.mag = player.rifle.mag;
    snapshot.reserve = player.rifle.reserve;
    snapshot.reloading = player.rifle.reloading;
    snapshot.zoomed = player.rifle.zoomed;
    snapshot.respawnIn = player.vitals.alive ? 0 : Math.max(0, player.respawnTimer);
    snapshot.kills = player.kills;
    snapshot.deaths = player.deaths;
    snapshot.seat = player.vehicleSeat ?? '';
  }
}
