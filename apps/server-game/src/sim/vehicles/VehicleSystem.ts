import type RAPIERModule from '@dimforge/rapier3d-compat';
import type { InputPayload } from '@schmalo/shared';
import {
  ARENA_VEHICLE_SPAWN,
  CHAINGUN,
  Chaingun,
  SeatManager,
  WARTHOG,
  type SeatId,
} from '@schmalo/sim';
import type { CombatSystem } from '../players/CombatSystem';
import type { PlayerManager } from '../players/PlayerManager';
import type { PlayerRuntimeState } from '../players/PlayerState';
import { VehicleSnapshot, type SandboxRoomState } from '../world/GameState';

const HOG_ID = 'hog-1';
const BOARD_RANGE = 3.8;
/** Per-wheel, all-wheel drive (4×4500 = 18 kN). Rear-only drive at this
 * mass wheelies the chassis and lifts the steering wheels off the ground. */
const ENGINE_FORCE = 4500;
const BRAKE_FORCE = 3200;
const IDLE_BRAKE = 500;
const STEER_MAX = 0.55;

/** Seat positions in chassis-local space (origin at chassis center). */
const SEAT_LOCAL: Record<SeatId, { x: number; y: number; z: number }> = {
  driver: { x: -0.55, y: 0.95, z: 0.25 },
  passenger: { x: 0.55, y: 0.95, z: 0.25 },
  gunner: { x: 0, y: 1.45, z: -1.35 },
};

/**
 * Server-authoritative Warthog: Rapier raycast vehicle (per-wheel
 * suspension), 3 contextual seats, driver throttle/steer, gunner
 * chaingun with overheat (sim module), and splatter kills resolved
 * through the shared threshold logic.
 */
export class VehicleSystem {
  private chassis!: RAPIERModule.RigidBody;
  private chassisCollider!: RAPIERModule.Collider;
  private controller!: RAPIERModule.DynamicRayCastVehicleController;
  private readonly seats = new SeatManager();
  private readonly gun = new Chaingun();
  private driveX = 0;
  private driveZ = 0;
  private gunnerFiring = false;
  private turretYaw = 0;
  private turretPitch = 0;
  private readonly splatterCooldown = new Map<string, number>();

  constructor(
    private readonly rapier: typeof RAPIERModule,
    private readonly world: RAPIERModule.World,
    private readonly players: PlayerManager,
    private readonly combat: CombatSystem,
    private readonly state: SandboxRoomState,
    private readonly io: { broadcast(type: string, payload: unknown): void },
  ) {}

  spawn(): void {
    const s = ARENA_VEHICLE_SPAWN;
    this.chassis = this.world.createRigidBody(
      this.rapier.RigidBodyDesc.dynamic()
        .setTranslation(s.x, s.y, s.z)
        // Face +Z: the open driving field, away from the tower crates.
        .setRotation({ x: 0, y: 1, z: 0, w: 0 })
        .setLinearDamping(0.15)
        .setAngularDamping(1.2),
    );
    this.chassisCollider = this.world.createCollider(
      this.rapier.ColliderDesc.cuboid(1.1, 0.55, 2.05)
        .setMass(WARTHOG.MASS)
        .setFriction(0.6),
      this.chassis,
    );

    this.controller = this.world.createVehicleController(this.chassis);
    this.controller.indexUpAxis = 1;
    this.controller.setIndexForwardAxis = 2;

    const wheelPositions = [
      { x: -0.95, y: -0.3, z: -1.3 }, // front-left
      { x: 0.95, y: -0.3, z: -1.3 }, // front-right
      { x: -0.95, y: -0.3, z: 1.3 }, // rear-left
      { x: 0.95, y: -0.3, z: 1.3 }, // rear-right
    ];
    for (const pos of wheelPositions) {
      this.controller.addWheel(pos, { x: 0, y: -1, z: 0 }, { x: -1, y: 0, z: 0 }, WARTHOG.SUSPENSION_TRAVEL, 0.42);
    }
    for (let i = 0; i < 4; i++) {
      this.controller.setWheelSuspensionStiffness(i, 55);
      this.controller.setWheelSuspensionCompression(i, 3.2);
      this.controller.setWheelSuspensionRelaxation(i, 4.4);
      this.controller.setWheelMaxSuspensionForce(i, 90000);
      this.controller.setWheelFrictionSlip(i, 2.6);
      this.controller.setWheelSideFrictionStiffness(i, 0.85); // loose rear drift feel
    }

    const snap = new VehicleSnapshot(HOG_ID);
    snap.position.set(s.x, s.y, s.z);
    this.state.vehicles.set(HOG_ID, snap);
  }

  seatOf(player: PlayerRuntimeState): SeatId | null {
    return this.seats.seatOf(player.sessionId);
  }

  /** E near the hog: pick the seat contextually from where the player
   * stands (rear → gunner, left front → driver, right front → passenger). */
  tryBoard(player: PlayerRuntimeState): boolean {
    if (!player.vitals.alive || this.seats.seatOf(player.sessionId)) return false;
    const c = this.chassis.translation();
    const p = player.body.translation();
    const dx = p.x - c.x;
    const dy = p.y - c.y;
    const dz = p.z - c.z;
    if (Math.hypot(dx, dy, dz) > BOARD_RANGE) return false;

    // Into chassis-local coordinates (yaw only is plenty for seat picking).
    const q = this.chassis.rotation();
    const yaw = Math.atan2(2 * (q.w * q.y + q.x * q.z), 1 - 2 * (q.y * q.y + q.x * q.x));
    const localX = Math.cos(-yaw) * dx - Math.sin(-yaw) * dz;
    const localZ = Math.sin(-yaw) * dx + Math.cos(-yaw) * dz;

    const preference: SeatId[] =
      localZ > 0.7 ? ['gunner', 'passenger', 'driver'] :
      localX < 0 ? ['driver', 'passenger', 'gunner'] :
      ['passenger', 'driver', 'gunner'];

    for (const seat of preference) {
      if (this.seats.board(player.sessionId, seat)) {
        player.vehicleSeat = seat;
        player.collider.setEnabled(false);
        player.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
        player.velY = 0;
        if (seat === 'gunner') {
          this.turretYaw = player.yaw;
          this.turretPitch = player.pitch;
        }
        return true;
      }
    }
    return false;
  }

  exit(player: PlayerRuntimeState): void {
    const seat = this.seats.seatOf(player.sessionId);
    if (!seat) return;
    this.seats.exit(player.sessionId);
    player.vehicleSeat = null;
    if (seat === 'driver') {
      this.driveX = 0;
      this.driveZ = 0;
    }
    if (seat === 'gunner') this.gunnerFiring = false;

    // Eject to the seat's side of the hog, slightly up.
    const c = this.chassis.translation();
    const side = seat === 'passenger' ? 1 : -1;
    const q = this.chassis.rotation();
    const yaw = Math.atan2(2 * (q.w * q.y + q.x * q.z), 1 - 2 * (q.y * q.y + q.x * q.x));
    const outX = Math.cos(yaw) * side * 2.4;
    const outZ = -Math.sin(yaw) * side * 2.4;
    player.collider.setEnabled(true);
    player.body.setTranslation({ x: c.x + outX, y: c.y + 1.6, z: c.z + outZ }, true);
    player.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    player.velY = 0;
  }

  /** Inputs from seated players (movement is repurposed as controls). */
  handleSeatedInput(player: PlayerRuntimeState, input: InputPayload): void {
    const seat = this.seats.seatOf(player.sessionId);
    if (!seat) return;
    if (input.use) {
      this.exit(player);
      return;
    }
    if (seat === 'driver') {
      this.driveX = Math.max(-1, Math.min(1, input.moveX));
      this.driveZ = Math.max(-1, Math.min(1, input.moveZ));
    } else if (seat === 'gunner') {
      this.turretYaw = input.yaw;
      this.turretPitch = input.pitch;
      this.gunnerFiring = input.fire;
    }
  }

  /** Before world.step: engine/steer/brake + suspension update. */
  update(dt: number): void {
    const driver = this.occupant('driver');
    // Signed speed along the chassis' local forward (-Z). Positive =
    // driving forward. (currentVehicleSpeed() is signed along +Z.)
    const q = this.chassis.rotation();
    const fwd = rotate(q, { x: 0, y: 0, z: -1 });
    const vel = this.chassis.linvel();
    const speed = vel.x * fwd.x + vel.z * fwd.z;

    let engine = 0;
    let brake = IDLE_BRAKE;
    if (driver) {
      const throttle = this.driveZ;
      if (throttle !== 0) {
        const sameDirection = Math.sign(throttle) === Math.sign(speed) || Math.abs(speed) < 0.5;
        if (sameDirection) {
          // Local forward is -Z, so positive throttle drives negative force.
          engine = Math.abs(speed) >= WARTHOG.TOP_SPEED ? 0 : -throttle * ENGINE_FORCE;
          brake = 0;
        } else {
          brake = BRAKE_FORCE; // throttle against motion = braking
        }
      }
      const steer = -this.driveX * STEER_MAX * (1 - Math.min(0.55, Math.abs(speed) / (WARTHOG.TOP_SPEED * 1.6)));
      this.controller.setWheelSteering(0, steer);
      this.controller.setWheelSteering(1, steer);
    } else {
      this.controller.setWheelSteering(0, 0);
      this.controller.setWheelSteering(1, 0);
    }
    // All-wheel drive; brakes on all four.
    for (let i = 0; i < 4; i++) {
      this.controller.setWheelEngineForce(i, engine);
      this.controller.setWheelBrake(i, brake);
    }
    if (process.env.HOG_DEBUG && (this.driveZ !== 0 || this.driveX !== 0)) {
      console.log(
        `hog dbg speed=${speed.toFixed(2)} engine=${engine} brake=${brake} driveX=${this.driveX} ` +
          `steer=${this.controller.wheelSteering(0)?.toFixed(3)} contact=${[0, 1, 2, 3].map((i) => (this.controller.wheelIsInContact(i) ? 1 : 0)).join('')}`,
      );
    }

    // Fixed 1/60 step (PRD: physics at fixed 60 Hz) — matches the
    // Rapier world's internal timestep even when the event loop jitters.
    this.controller.updateVehicle(
      1 / 60,
      undefined,
      undefined,
      (collider) =>
        collider.handle !== this.chassisCollider.handle &&
        !this.players.byColliderHandle.get(collider.handle),
    );

    // Turret.
    const gunner = this.occupant('gunner');
    const rounds = this.gun.update(dt, !!gunner && this.gunnerFiring && !!gunner.vitals.alive);
    if (gunner && rounds > 0) {
      const c = this.chassis.translation();
      const origin = { x: c.x, y: c.y + 1.9, z: c.z };
      for (let i = 0; i < rounds; i++) {
        this.combat.fireHitscanFrom(
          gunner,
          origin,
          this.turretYaw,
          this.turretPitch,
          this.gun.spreadDeg,
          CHAINGUN.BODY_DAMAGE,
        );
      }
    }
  }

  /** After world.step: pin seated players, resolve splatters, sync state. */
  postStep(dt: number): void {
    const c = this.chassis.translation();
    const q = this.chassis.rotation();

    for (const { seat, playerId } of this.seats.occupants) {
      const player = this.players.get(playerId);
      if (!player) {
        this.seats.exit(playerId);
        continue;
      }
      const local = SEAT_LOCAL[seat];
      const world = rotate(q, local);
      player.body.setTranslation({ x: c.x + world.x, y: c.y + world.y, z: c.z + world.z }, true);
      player.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    }

    // Splatter: fast hog + nearby unseated player.
    const vel = this.chassis.linvel();
    const speed = Math.hypot(vel.x, vel.z);
    const driver = this.occupant('driver');
    if (driver && speed >= 2.5) {
      for (const target of this.players.values()) {
        if (!target.vitals.alive || this.seats.seatOf(target.sessionId)) continue;
        const t = target.body.translation();
        const dx = t.x - c.x;
        const dz = t.z - c.z;
        const dist = Math.hypot(dx, dz);
        if (dist > 2.6 || Math.abs(t.y - c.y) > 2.2) continue;
        const cooldown = this.splatterCooldown.get(target.sessionId) ?? 0;
        if (cooldown > 0) continue;
        this.splatterCooldown.set(target.sessionId, 0.7);
        const inv = dist > 1e-6 ? 1 / dist : 0;
        this.combat.applyVehicleImpact(driver, target, speed, { x: dx * inv, y: 0, z: dz * inv });
      }
    }
    for (const [id, cd] of this.splatterCooldown) {
      if (cd > 0) this.splatterCooldown.set(id, cd - dt);
    }

    // Recover a flipped, unoccupied hog that has settled upside-down.
    const up = rotate(q, { x: 0, y: 1, z: 0 });
    if (up.y < -0.6 && speed < 0.5 && this.seats.occupants.length === 0) {
      this.chassis.setTranslation({ x: c.x, y: c.y + 1.6, z: c.z }, true);
      this.chassis.setRotation({ x: 0, y: q.y, z: 0, w: q.w }, true);
      this.chassis.setAngvel({ x: 0, y: 0, z: 0 }, true);
    }

    const snap = this.state.vehicles.get(HOG_ID);
    if (!snap) return;
    snap.position.set(c.x, c.y, c.z);
    snap.qx = q.x;
    snap.qy = q.y;
    snap.qz = q.z;
    snap.qw = q.w;
    snap.speed = speed;
    snap.heat = this.gun.heat;
    snap.overheated = this.gun.overheated;
    snap.turretYaw = this.turretYaw;
    snap.turretPitch = this.turretPitch;
    snap.driver = this.seats.occupantOf('driver') ?? '';
    snap.passenger = this.seats.occupantOf('passenger') ?? '';
    snap.gunner = this.seats.occupantOf('gunner') ?? '';
  }

  private occupant(seat: SeatId): PlayerRuntimeState | null {
    const id = this.seats.occupantOf(seat);
    return id ? (this.players.get(id) ?? null) : null;
  }
}

/** Rotate a vector by a quaternion. */
function rotate(
  q: { x: number; y: number; z: number; w: number },
  v: { x: number; y: number; z: number },
): { x: number; y: number; z: number } {
  const { x, y, z, w } = q;
  const ix = w * v.x + y * v.z - z * v.y;
  const iy = w * v.y + z * v.x - x * v.z;
  const iz = w * v.z + x * v.y - y * v.x;
  const iw = -x * v.x - y * v.y - z * v.z;
  return {
    x: ix * w + iw * -x + iy * -z - iz * -y,
    y: iy * w + iw * -y + iz * -x - ix * -z,
    z: iz * w + iw * -z + ix * -y - iy * -x,
  };
}
