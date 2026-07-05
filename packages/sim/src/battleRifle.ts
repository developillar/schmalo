import { BATTLE_RIFLE } from './constants';

export interface FiredRound {
  /** 0-based index within its burst (0..2). */
  indexInBurst: number;
  /** Spread cone half-angle for this round, degrees. Blooms across the burst. */
  spreadDeg: number;
  /** Sim-clock time the round left the barrel. */
  time: number;
}

/**
 * Battle Rifle weapon state machine. Pure and clock-driven: call
 * update(dt) every fixed step; pullTrigger()/startReload()/toggleZoom()
 * mutate intent. Rounds are hitscan — damage application is the caller's
 * job (see damagePerBullet for range falloff).
 *
 * Invariants (asserted headless): mag/reserve never negative, never
 * over-cap; 3 rounds per full burst; bursts rate-limited to one per
 * INTER_BURST_INTERVAL; taking damage while zoomed descopes.
 */
export class BattleRifle {
  mag: number = BATTLE_RIFLE.MAGAZINE;
  reserve: number = BATTLE_RIFLE.RESERVE;
  zoomed = false;

  private clock = 0;
  private lastBurstStart = -Infinity;
  private pendingRounds: Array<{ fireAt: number; indexInBurst: number }> = [];
  private reloadingUntil = -Infinity;

  get reloading(): boolean {
    return this.clock < this.reloadingUntil;
  }

  get bursting(): boolean {
    return this.pendingRounds.length > 0;
  }

  /**
   * Request a burst. Returns true if the burst started. Rejected while
   * reloading, mid-burst, before the inter-burst interval has elapsed,
   * or with an empty magazine.
   */
  pullTrigger(): boolean {
    if (this.reloading || this.bursting) return false;
    if (this.clock - this.lastBurstStart < BATTLE_RIFLE.INTER_BURST_INTERVAL) return false;
    if (this.mag <= 0) return false;

    const rounds = Math.min(BATTLE_RIFLE.ROUNDS_PER_BURST, this.mag);
    for (let i = 0; i < rounds; i++) {
      this.pendingRounds.push({
        fireAt: this.clock + i * BATTLE_RIFLE.INTRA_BURST_INTERVAL,
        indexInBurst: i,
      });
    }
    this.lastBurstStart = this.clock;
    return true;
  }

  /** Begin a reload. Rejected mid-burst, mid-reload, with a full mag, or
   * with no reserve ammo. Empty reloads are slower than tactical ones. */
  startReload(): boolean {
    if (this.reloading || this.bursting) return false;
    if (this.mag >= BATTLE_RIFLE.MAGAZINE || this.reserve <= 0) return false;
    const duration = this.mag === 0 ? BATTLE_RIFLE.RELOAD_EMPTY : BATTLE_RIFLE.RELOAD_TACTICAL;
    this.reloadingUntil = this.clock + duration;
    this.zoomed = false;
    return true;
  }

  toggleZoom(): boolean {
    if (this.reloading) return false;
    this.zoomed = !this.zoomed;
    return true;
  }

  /** Taking any damage while zoomed forces descope. */
  onDamaged(): void {
    this.zoomed = false;
  }

  /** Advance the weapon clock one step; returns rounds fired this step. */
  update(dt: number): FiredRound[] {
    const wasReloading = this.reloading;
    this.clock += dt;

    if (wasReloading && !this.reloading) {
      const need = BATTLE_RIFLE.MAGAZINE - this.mag;
      const taken = Math.min(need, this.reserve);
      this.mag += taken;
      this.reserve -= taken;
    }

    const fired: FiredRound[] = [];
    while (this.pendingRounds.length > 0 && this.pendingRounds[0].fireAt <= this.clock) {
      const round = this.pendingRounds.shift()!;
      if (this.mag <= 0) continue;
      this.mag -= 1;
      const bloomT = round.indexInBurst / (BATTLE_RIFLE.ROUNDS_PER_BURST - 1);
      fired.push({
        indexInBurst: round.indexInBurst,
        spreadDeg:
          BATTLE_RIFLE.SPREAD_BASE_DEG +
          (BATTLE_RIFLE.SPREAD_BLOOM_DEG - BATTLE_RIFLE.SPREAD_BASE_DEG) * bloomT,
        time: round.fireAt,
      });
    }
    return fired;
  }
}

/** Per-bullet body damage at a given range (optional falloff flag,
 * default on — beyond ~30 m the BR becomes a 5-burst kill). */
export function brDamagePerBullet(distance: number, falloffEnabled = true): number {
  if (falloffEnabled && distance > BATTLE_RIFLE.FALLOFF_RANGE) {
    return BATTLE_RIFLE.FALLOFF_BODY_DAMAGE;
  }
  return BATTLE_RIFLE.BODY_DAMAGE;
}
