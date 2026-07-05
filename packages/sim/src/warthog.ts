import { CHAINGUN, WARTHOG } from './constants';

export type SeatId = (typeof WARTHOG.SEATS)[number];

export interface VehicleImpact {
  /** Instakill splatter (relative speed at/above threshold). */
  splatter: boolean;
  damage: number;
  /** Knockback impulse magnitude for sub-splatter hits. */
  knockback: number;
}

/** Resolve a vehicle→player impact at the given relative speed (m/s). */
export function resolveVehicleImpact(relativeSpeed: number): VehicleImpact {
  const speed = Math.max(0, relativeSpeed);
  if (speed >= WARTHOG.SPLATTER_SPEED) {
    return { splatter: true, damage: Infinity, knockback: speed * WARTHOG.IMPACT_KNOCKBACK_PER_MS };
  }
  return {
    splatter: false,
    damage: speed * WARTHOG.IMPACT_DAMAGE_PER_MS,
    knockback: speed * WARTHOG.IMPACT_KNOCKBACK_PER_MS,
  };
}

/**
 * Chaingun turret: spin-up, heat, overheat lockout. No reload — heat
 * builds while firing and sheds when released; overheating locks the
 * trigger until fully cooled.
 */
export class Chaingun {
  heat = 0;
  overheated = false;
  /** 0..1 spin-up progress; rounds fire only at 1. */
  spin = 0;
  /** Seconds of continuous fire (drives spread ramp). */
  private fireTime = 0;
  private roundAccumulator = 0;

  get spreadDeg(): number {
    const t = Math.min(1, this.fireTime / CHAINGUN.SPREAD_RAMP);
    return CHAINGUN.SPREAD_BASE_DEG + (CHAINGUN.SPREAD_MAX_DEG - CHAINGUN.SPREAD_BASE_DEG) * t;
  }

  get canFire(): boolean {
    return !this.overheated;
  }

  /** Advance one step; returns the number of rounds fired this step. */
  update(dt: number, triggerHeld: boolean): number {
    if (triggerHeld && !this.overheated) {
      this.spin = Math.min(1, this.spin + dt / CHAINGUN.SPINUP);
      if (this.spin < 1) return 0;

      this.fireTime += dt;
      this.heat += CHAINGUN.HEAT_PER_SECOND * dt;
      this.roundAccumulator += CHAINGUN.ROUNDS_PER_SECOND * dt;
      const rounds = Math.floor(this.roundAccumulator);
      this.roundAccumulator -= rounds;

      if (this.heat >= 1) {
        this.heat = 1;
        this.overheated = true;
        this.spin = 0;
        this.fireTime = 0;
        this.roundAccumulator = 0;
      }
      return rounds;
    }

    // Released or locked out: spin down and cool. Overheat clears only
    // at full cool.
    this.spin = Math.max(0, this.spin - dt / CHAINGUN.SPINUP);
    this.fireTime = 0;
    this.roundAccumulator = 0;
    this.heat = Math.max(0, this.heat - CHAINGUN.COOL_PER_SECOND * dt);
    if (this.overheated && this.heat <= 0) this.overheated = false;
    return 0;
  }
}

/**
 * Three-seat occupancy: driver, passenger, gunner. Enforces one player
 * per seat and one seat per player.
 */
export class SeatManager {
  private seats = new Map<SeatId, string | null>(WARTHOG.SEATS.map((s) => [s, null]));

  occupantOf(seat: SeatId): string | null {
    return this.seats.get(seat) ?? null;
  }

  seatOf(playerId: string): SeatId | null {
    for (const [seat, occupant] of this.seats) {
      if (occupant === playerId) return seat;
    }
    return null;
  }

  board(playerId: string, seat: SeatId): boolean {
    if (this.seats.get(seat) !== null) return false;
    if (this.seatOf(playerId) !== null) return false;
    this.seats.set(seat, playerId);
    return true;
  }

  exit(playerId: string): boolean {
    const seat = this.seatOf(playerId);
    if (seat === null) return false;
    this.seats.set(seat, null);
    return true;
  }

  get occupants(): Array<{ seat: SeatId; playerId: string }> {
    const out: Array<{ seat: SeatId; playerId: string }> = [];
    for (const [seat, occupant] of this.seats) {
      if (occupant !== null) out.push({ seat, playerId: occupant });
    }
    return out;
  }
}
