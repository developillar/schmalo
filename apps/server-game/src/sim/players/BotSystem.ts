import type RAPIERModule from '@dimforge/rapier3d-compat';
import { PLAYER } from '@schmalo/shared';
import type { InputPayload } from '@schmalo/shared';
import { ARENA_WAYPOINTS, VITALS, type Vec3 } from '@schmalo/sim';
import { mulberry32 } from './CombatSystem';
import type { PlayerManager } from './PlayerManager';
import type { PlayerRuntimeState } from './PlayerState';

export const BOT_IDS = ['bot-alpha', 'bot-bravo'] as const;

const ENGAGE_RANGE = 42;
const EYE_OFFSET = PLAYER.EYE_HEIGHT - PLAYER.STANDING_HEIGHT / 2;

type BotState = 'wander' | 'engage' | 'retreat';

interface BotBrain {
  id: string;
  seq: number;
  state: BotState;
  waypoint: Vec3 | null;
  repathTimer: number;
  strafeDir: 1 | -1;
  strafeTimer: number;
  trigger: number;
  jumpTimer: number;
  aimDrift: number;
  rng: () => number;
}

/**
 * Server bot AI. Bots are full players — same body, vitals, rifle, and
 * input pipeline as humans. The brain synthesizes an InputPayload per
 * tick: waypoint wandering, line-of-sight target acquisition,
 * strafe-fighting with imperfect aim and burst discipline, and a
 * retreat state while shields recharge.
 */
export class BotSystem {
  private readonly brains: BotBrain[] = [];

  constructor(
    private readonly rapier: typeof RAPIERModule,
    private readonly world: RAPIERModule.World,
    private readonly players: PlayerManager,
  ) {}

  spawn(): void {
    BOT_IDS.forEach((id, i) => {
      this.players.add(id, true);
      this.brains.push({
        id,
        seq: 0,
        state: 'wander',
        waypoint: null,
        repathTimer: 0,
        strafeDir: 1,
        strafeTimer: 0,
        trigger: 0,
        jumpTimer: 2 + i,
        aimDrift: 0,
        rng: mulberry32(0x5eed + i * 7919),
      });
    });
  }

  step(dt: number): Array<{ id: string; input: InputPayload }> {
    const out: Array<{ id: string; input: InputPayload }> = [];
    for (const brain of this.brains) {
      const bot = this.players.get(brain.id);
      if (!bot || !bot.vitals.alive) continue;
      out.push({ id: brain.id, input: this.think(brain, bot, dt) });
    }
    return out;
  }

  private think(brain: BotBrain, bot: PlayerRuntimeState, dt: number): InputPayload {
    brain.repathTimer -= dt;
    brain.strafeTimer -= dt;
    brain.trigger -= dt;
    brain.jumpTimer -= dt;
    brain.aimDrift += dt;

    const target = this.acquireTarget(bot);

    // State transitions.
    if (bot.vitals.shield <= 0 && bot.vitals.alive) {
      brain.state = 'retreat';
    } else if (brain.state === 'retreat' && bot.vitals.shield >= VITALS.MAX_SHIELD - 1) {
      brain.state = 'wander';
      brain.waypoint = null;
    }
    if (brain.state !== 'retreat') {
      brain.state = target ? 'engage' : 'wander';
    }

    const input: InputPayload = {
      seq: ++brain.seq,
      dt,
      moveX: 0,
      moveZ: 0,
      yaw: bot.yaw,
      pitch: 0,
      jump: false,
      crouch: false,
      fire: false,
      reload: false,
      zoomToggle: false,
      melee: false,
      use: false,
    };

    if (brain.state === 'engage' && target) {
      this.engage(brain, bot, target, input);
    } else {
      this.navigate(brain, bot, target, input);
    }

    // Top up the mag when nothing is in sight.
    if (!target && bot.rifle.mag <= 9 && bot.rifle.reserve > 0 && !bot.rifle.reloading) {
      input.reload = true;
    }
    return input;
  }

  /** Nearest living, visible enemy within engagement range. */
  private acquireTarget(bot: PlayerRuntimeState): PlayerRuntimeState | null {
    const pos = bot.body.translation();
    let best: PlayerRuntimeState | null = null;
    let bestDist = ENGAGE_RANGE;
    for (const other of this.players.values()) {
      if (other === bot || !other.vitals.alive) continue;
      const t = other.body.translation();
      const dist = Math.hypot(t.x - pos.x, t.y - pos.y, t.z - pos.z);
      if (dist >= bestDist) continue;
      if (!this.hasLineOfSight(bot, other, dist)) continue;
      best = other;
      bestDist = dist;
    }
    return best;
  }

  private hasLineOfSight(bot: PlayerRuntimeState, target: PlayerRuntimeState, dist: number): boolean {
    const a = bot.body.translation();
    const b = target.body.translation();
    const origin = { x: a.x, y: a.y + EYE_OFFSET, z: a.z };
    const dir = {
      x: (b.x - origin.x) / dist,
      y: (b.y + EYE_OFFSET - origin.y) / dist,
      z: (b.z - origin.z) / dist,
    };
    const ray = new this.rapier.Ray(origin, dir);
    const hit = this.world.castRay(ray, dist, true, undefined, undefined, undefined, bot.body);
    if (!hit) return true;
    return hit.collider.handle === target.collider.handle;
  }

  /** Strafe-fight: face the target with drifting aim error, hold
   * spacing, flip strafe direction on a timer, pull bursts with human
   * cadence, hop occasionally. */
  private engage(
    brain: BotBrain,
    bot: PlayerRuntimeState,
    target: PlayerRuntimeState,
    input: InputPayload,
  ): void {
    const pos = bot.body.translation();
    const t = target.body.translation();
    const dx = t.x - pos.x;
    const dz = t.z - pos.z;
    const distXZ = Math.hypot(dx, dz);

    // Aim: body while shields are up, head once they pop (the Halo loop).
    const aimY = t.y + (target.vitals.shield <= 0 ? EYE_OFFSET : 0);
    const wobble = 0.014 * Math.sin(brain.aimDrift * 2.3) + 0.02 * (brain.rng() - 0.5);
    const yaw = Math.atan2(-dx, -dz) + wobble;
    const pitch = Math.atan2(aimY - (pos.y + EYE_OFFSET), distXZ) + wobble * 0.5;
    input.yaw = yaw;
    input.pitch = pitch;

    // Spacing + strafe.
    if (brain.strafeTimer <= 0) {
      brain.strafeDir = brain.rng() > 0.5 ? 1 : -1;
      brain.strafeTimer = 0.7 + brain.rng() * 1.1;
    }
    input.moveX = brain.strafeDir;
    if (distXZ > 26) input.moveZ = 1;
    else if (distXZ < 9) input.moveZ = -0.7;

    if (brain.jumpTimer <= 0) {
      brain.jumpTimer = 1.8 + brain.rng() * 2.5;
      if (brain.rng() < 0.4) input.jump = true;
    }

    // Trigger discipline: paced pulls (the weapon enforces the hard
    // 0.25 s cap; this adds the human-ish variance on top).
    if (brain.trigger <= 0) {
      input.fire = true;
      brain.trigger = 0.28 + brain.rng() * 0.3;
    }
  }

  /** Wander/retreat: head to a waypoint; retreat picks the point
   * farthest from the current threat. */
  private navigate(
    brain: BotBrain,
    bot: PlayerRuntimeState,
    threat: PlayerRuntimeState | null,
    input: InputPayload,
  ): void {
    const pos = bot.body.translation();

    const arrived =
      brain.waypoint &&
      Math.hypot(brain.waypoint.x - pos.x, brain.waypoint.z - pos.z) < 1.8;
    if (!brain.waypoint || arrived || brain.repathTimer <= 0) {
      brain.waypoint = this.pickWaypoint(brain, pos, threat);
      brain.repathTimer = 5 + brain.rng() * 4;
    }

    const dx = brain.waypoint.x - pos.x;
    const dz = brain.waypoint.z - pos.z;
    input.yaw = Math.atan2(-dx, -dz);
    input.moveZ = 1;
    if (brain.state === 'retreat' && brain.jumpTimer <= 0) {
      brain.jumpTimer = 1.5 + brain.rng() * 2;
      input.jump = true;
    }
  }

  private pickWaypoint(
    brain: BotBrain,
    pos: { x: number; z: number },
    threat: PlayerRuntimeState | null,
  ): Vec3 {
    if (brain.state === 'retreat' && threat) {
      const t = threat.body.translation();
      let best = ARENA_WAYPOINTS[0];
      let bestScore = -Infinity;
      for (const wp of ARENA_WAYPOINTS) {
        const score = Math.hypot(wp.x - t.x, wp.z - t.z) - Math.hypot(wp.x - pos.x, wp.z - pos.z) * 0.5;
        if (score > bestScore) {
          bestScore = score;
          best = wp;
        }
      }
      return best;
    }
    // Wander: random waypoint that isn't right next to us.
    for (let i = 0; i < 8; i++) {
      const wp = ARENA_WAYPOINTS[Math.floor(brain.rng() * ARENA_WAYPOINTS.length)];
      if (Math.hypot(wp.x - pos.x, wp.z - pos.z) > 6) return wp;
    }
    return ARENA_WAYPOINTS[0];
  }
}
