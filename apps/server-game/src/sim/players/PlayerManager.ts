import type RAPIERModule from '@dimforge/rapier3d-compat';
import { PLAYER, WORLD } from '@schmalo/shared';
import { BattleRifle, Vitals } from '@schmalo/sim';
import { PlayerSnapshot, Vec3State, type SandboxRoomState } from '../world/GameState';
import type { PlayerRuntimeState } from './PlayerState';

export class PlayerManager {
  private readonly bySession = new Map<string, PlayerRuntimeState>();
  /** Rapier collider handle → sessionId, for hitscan resolution. */
  readonly byColliderHandle = new Map<number, string>();
  private spawnCursor = 0;

  constructor(
    private readonly rapier: typeof RAPIERModule,
    private readonly world: RAPIERModule.World,
    private readonly state: SandboxRoomState,
  ) {}

  add(sessionId: string, isBot = false): PlayerRuntimeState {
    const spawn = this.nextSpawn();
    // Dynamic body with rotations locked and engine gravity off: vertical
    // motion is integrated manually from the sim module so the jump arc
    // matches the headless-tested feel exactly; Rapier still resolves
    // collisions against level geometry and props.
    const bodyDesc = this.rapier.RigidBodyDesc.dynamic()
      .setTranslation(spawn.x, spawn.y, spawn.z)
      .lockRotations()
      .setGravityScale(0);
    const body = this.world.createRigidBody(bodyDesc);

    const half = (PLAYER.STANDING_HEIGHT - PLAYER.RADIUS * 2) / 2;
    const collider = this.world.createCollider(
      this.rapier.ColliderDesc.capsule(half, PLAYER.RADIUS).setMass(85).setFriction(0).setRestitution(0),
      body,
    );

    const runtime: PlayerRuntimeState = {
      sessionId,
      isBot,
      body,
      collider,
      inputs: [],
      lastProcessedInput: 0,
      yaw: 0,
      pitch: 0,
      grounded: false,
      crouched: false,
      velY: 0,
      coyoteTimer: Infinity,
      prevJumpHeld: false,
      vitals: new Vitals(),
      rifle: new BattleRifle(),
      respawnTimer: 0,
      meleeCooldown: 0,
      kills: 0,
      deaths: 0,
    };

    this.bySession.set(sessionId, runtime);
    this.byColliderHandle.set(collider.handle, sessionId);
    const snap = new PlayerSnapshot(sessionId, isBot);
    snap.position = new Vec3State(spawn.x, spawn.y, spawn.z);
    this.state.players.set(sessionId, snap);
    this.state.playerCount = this.bySession.size;
    return runtime;
  }

  respawn(player: PlayerRuntimeState): void {
    const spawn = this.nextSpawn();
    player.body.setTranslation({ x: spawn.x, y: spawn.y, z: spawn.z }, true);
    player.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    player.velY = 0;
    player.grounded = false;
    player.coyoteTimer = Infinity;
    player.vitals.respawn();
    player.rifle = new BattleRifle();
    player.respawnTimer = 0;
  }

  remove(sessionId: string): void {
    const player = this.bySession.get(sessionId);
    if (!player) return;
    this.byColliderHandle.delete(player.collider.handle);
    this.world.removeCollider(player.collider, true);
    this.world.removeRigidBody(player.body);
    this.bySession.delete(sessionId);
    this.state.players.delete(sessionId);
    this.state.playerCount = this.bySession.size;
  }

  get(sessionId: string): PlayerRuntimeState | undefined {
    return this.bySession.get(sessionId);
  }

  values(): IterableIterator<PlayerRuntimeState> {
    return this.bySession.values();
  }

  private nextSpawn(): { x: number; y: number; z: number } {
    const spawn = WORLD.SPAWN_POSITIONS[this.spawnCursor % WORLD.SPAWN_POSITIONS.length];
    this.spawnCursor++;
    return spawn;
  }
}
