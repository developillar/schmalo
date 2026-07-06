import type RAPIERModule from '@dimforge/rapier3d-compat';
import { COMBAT, MSG, PLAYER } from '@schmalo/shared';
import type {
  HitConfirmPayload,
  InputPayload,
  KillFeedPayload,
  ShotFiredPayload,
} from '@schmalo/shared';
import { brDamagePerBullet, resolveVehicleImpact, viewDirection, type Vec3 } from '@schmalo/sim';
import type { PlayerManager } from './PlayerManager';
import type { PlayerRuntimeState } from './PlayerState';

const EYE_OFFSET = PLAYER.EYE_HEIGHT - PLAYER.STANDING_HEIGHT / 2;
const MAX_RANGE = 250;
const MELEE_COOLDOWN = 0.8;

export interface CombatIO {
  send(sessionId: string, type: string, payload: unknown): void;
  broadcast(type: string, payload: unknown): void;
}

/** Deterministic per-room RNG (mulberry32) so spread patterns replay
 * identically under the same seed — keeps the sim server-authoritative
 * AND reproducible. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class CombatSystem {
  constructor(
    private readonly rapier: typeof RAPIERModule,
    private readonly world: RAPIERModule.World,
    private readonly players: PlayerManager,
    private readonly io: CombatIO,
    private readonly rng: () => number = mulberry32(0xb1a4),
  ) {}

  /** Combat intents from one input frame (edge-triggered by the client). */
  handleInput(player: PlayerRuntimeState, input: InputPayload): void {
    if (!player.vitals.alive) return;

    if (input.zoomToggle) player.rifle.toggleZoom();
    if (input.reload) player.rifle.startReload();
    if (input.fire) {
      if (player.rifle.mag === 0) {
        player.rifle.startReload();
      } else {
        player.rifle.pullTrigger();
      }
    }
    if (input.melee && player.meleeCooldown <= 0) {
      player.meleeCooldown = MELEE_COOLDOWN;
      this.resolveMelee(player);
    }
  }

  /** Per-tick weapon clock: fires any rounds due this step. */
  tickPlayer(player: PlayerRuntimeState, dt: number): void {
    player.vitals.tick(dt);
    const rounds = player.rifle.update(dt);
    if (!player.vitals.alive) return;
    for (const round of rounds) {
      this.fireHitscan(player, round.spreadDeg);
    }
  }

  private fireHitscan(shooter: PlayerRuntimeState, spreadDeg: number): void {
    const t = shooter.body.translation();
    const origin: Vec3 = { x: t.x, y: t.y + EYE_OFFSET, z: t.z };
    this.fireHitscanFrom(shooter, origin, shooter.yaw, shooter.pitch, spreadDeg, null);
  }

  /**
   * Generic hitscan used by the BR (damage=null → range falloff model)
   * and the Warthog chaingun (fixed per-bullet damage, turret origin).
   * Headshots only matter to precision weapons, so `precision` gates
   * the instakill flag.
   */
  fireHitscanFrom(
    shooter: PlayerRuntimeState,
    origin: Vec3,
    yaw: number,
    pitch: number,
    spreadDeg: number,
    damagePerBullet: number | null,
  ): void {
    const dir = this.applySpread(viewDirection(yaw, pitch), spreadDeg);

    const ray = new this.rapier.Ray(origin, dir);
    const hit = this.world.castRay(ray, MAX_RANGE, true, undefined, undefined, undefined, shooter.body);
    const toi = hit ? hitDistance(hit) : MAX_RANGE;

    const end: Vec3 = {
      x: origin.x + dir.x * toi,
      y: origin.y + dir.y * toi,
      z: origin.z + dir.z * toi,
    };
    this.io.broadcast(MSG.SHOT_FIRED, {
      shooter: shooter.sessionId,
      origin,
      end,
    } satisfies ShotFiredPayload);

    if (!hit) return;
    const targetId = this.players.byColliderHandle.get(hit.collider.handle);
    if (!targetId) return;
    const target = this.players.get(targetId);
    if (!target || !target.vitals.alive) return;

    const precision = damagePerBullet === null;
    const targetPos = target.body.translation();
    const targetBottom = targetPos.y - PLAYER.STANDING_HEIGHT / 2;
    const headshot =
      precision && end.y - targetBottom >= PLAYER.STANDING_HEIGHT * PLAYER.HEAD_FRACTION;

    const damage = damagePerBullet ?? brDamagePerBullet(toi);
    const result = target.vitals.applyDamage({ amount: damage, headshot });
    target.rifle.onDamaged(); // descope

    let kind: HitConfirmPayload['kind'] = 'shield';
    if (result.died) kind = 'kill';
    else if (headshot && result.healthDamage > 0) kind = 'headshot';
    else if (result.healthDamage > 0) kind = 'flesh';
    this.io.send(shooter.sessionId, MSG.HIT_CONFIRM, { kind } satisfies HitConfirmPayload);

    if (result.died) {
      this.onKill(shooter, target, result.headshotKill);
    }
  }

  /** Vehicle→player impact: instakill splatter at/above the threshold,
   * damage + knockback impulse below it. */
  applyVehicleImpact(
    driver: PlayerRuntimeState,
    target: PlayerRuntimeState,
    relativeSpeed: number,
    pushDir: Vec3,
  ): void {
    if (!target.vitals.alive) return;
    const impact = resolveVehicleImpact(relativeSpeed);
    const amount = impact.splatter ? 100000 : impact.damage;
    const result = target.vitals.applyDamage({ amount });
    target.rifle.onDamaged();
    if (!impact.splatter && impact.knockback > 0) {
      target.body.applyImpulse(
        {
          x: pushDir.x * impact.knockback * 85,
          y: 0.35 * impact.knockback * 85,
          z: pushDir.z * impact.knockback * 85,
        },
        true,
      );
    }
    const kind: HitConfirmPayload['kind'] = result.died ? 'kill' : 'flesh';
    this.io.send(driver.sessionId, MSG.HIT_CONFIRM, { kind } satisfies HitConfirmPayload);
    if (result.died) this.onKill(driver, target, false);
  }

  private resolveMelee(attacker: PlayerRuntimeState): void {
    const a = attacker.body.translation();
    const forward = viewDirection(attacker.yaw, 0);

    for (const target of this.players.values()) {
      if (target === attacker || !target.vitals.alive) continue;
      const t = target.body.translation();
      const dx = t.x - a.x;
      const dy = t.y - a.y;
      const dz = t.z - a.z;
      const dist = Math.hypot(dx, dy, dz);
      if (dist > COMBAT.MELEE_RANGE + PLAYER.RADIUS) continue;

      const inv = dist > 1e-6 ? 1 / dist : 0;
      const facingDot = forward.x * dx * inv + forward.z * dz * inv;
      if (facingDot < 0.4) continue; // not in front of the attacker

      // Back melee: attacker stands behind the target's facing.
      const targetForward = viewDirection(target.yaw, 0);
      const towardAttackerDot = targetForward.x * -dx * inv + targetForward.z * -dz * inv;
      const isBack = towardAttackerDot < COMBAT.BACK_MELEE_DOT;

      const result = isBack ? target.vitals.meleeBack() : target.vitals.meleeFront();
      target.rifle.onDamaged();

      const kind: HitConfirmPayload['kind'] = result.died ? 'kill' : result.healthDamage > 0 ? 'flesh' : 'shield';
      this.io.send(attacker.sessionId, MSG.HIT_CONFIRM, { kind } satisfies HitConfirmPayload);
      if (result.died) this.onKill(attacker, target, false);
      return; // one victim per swing
    }
  }

  private onKill(killer: PlayerRuntimeState, victim: PlayerRuntimeState, headshot: boolean): void {
    killer.kills++;
    victim.deaths++;
    victim.respawnTimer = COMBAT.RESPAWN_DELAY;
    // Park the body out of the world until respawn.
    victim.body.setTranslation({ x: 0, y: -100, z: 0 }, true);
    victim.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    victim.velY = 0;
    this.io.broadcast(MSG.KILL_FEED, {
      killer: killer.sessionId,
      victim: victim.sessionId,
      headshot,
    } satisfies KillFeedPayload);
  }

  /** Perturb a unit direction within a cone of the given half-angle. */
  private applySpread(dir: Vec3, spreadDeg: number): Vec3 {
    if (spreadDeg <= 0) return dir;
    const spreadRad = (spreadDeg * Math.PI) / 180;
    const angle = spreadRad * Math.sqrt(this.rng());
    const azimuth = this.rng() * Math.PI * 2;

    // Orthonormal basis around dir.
    const up = Math.abs(dir.y) > 0.99 ? { x: 1, y: 0, z: 0 } : { x: 0, y: 1, z: 0 };
    const side = normalize(cross(dir, up));
    const upOrtho = cross(side, dir);

    const sinA = Math.sin(angle);
    const cosA = Math.cos(angle);
    const offX = side.x * Math.cos(azimuth) + upOrtho.x * Math.sin(azimuth);
    const offY = side.y * Math.cos(azimuth) + upOrtho.y * Math.sin(azimuth);
    const offZ = side.z * Math.cos(azimuth) + upOrtho.z * Math.sin(azimuth);
    return normalize({
      x: dir.x * cosA + offX * sinA,
      y: dir.y * cosA + offY * sinA,
      z: dir.z * cosA + offZ * sinA,
    });
  }
}

function hitDistance(hit: unknown): number {
  const h = hit as { timeOfImpact?: number; toi?: number };
  return h.timeOfImpact ?? h.toi ?? 0;
}

function cross(a: Vec3, b: Vec3): Vec3 {
  return { x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x };
}

function normalize(v: Vec3): Vec3 {
  const len = Math.hypot(v.x, v.y, v.z);
  if (len < 1e-9) return { x: 0, y: 0, z: 1 };
  return { x: v.x / len, y: v.y / len, z: v.z / len };
}
