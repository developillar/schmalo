import { VITALS } from './constants';

export interface DamageEvent {
  amount: number;
  /** Precision-weapon headshot. Instakill ONLY when shield is already 0. */
  headshot?: boolean;
  /** Melee direction. Back melee is an instakill regardless of shield. */
  melee?: 'front' | 'back';
}

export interface DamageResult {
  shieldDamage: number;
  healthDamage: number;
  shieldBroke: boolean;
  died: boolean;
  /** True when the kill came from the shields-down headshot rule. */
  headshotKill: boolean;
}

/**
 * Two-layer Halo-style vitals. Damage depletes shield first, then health.
 * Shield recharges 0→100 over RECHARGE_DURATION after RECHARGE_DELAY
 * seconds without damage; any damage resets the delay. Health never
 * regenerates — it is restored only by respawn().
 */
export class Vitals {
  shield: number = VITALS.MAX_SHIELD;
  health: number = VITALS.MAX_HEALTH;
  alive = true;
  /** Seconds since the last damage taken. */
  timeSinceDamage = Infinity;
  onShieldBreak?: () => void;

  /** True while shield is actively refilling. */
  get recharging(): boolean {
    return (
      this.alive &&
      this.shield < VITALS.MAX_SHIELD &&
      this.timeSinceDamage >= VITALS.RECHARGE_DELAY
    );
  }

  applyDamage(event: DamageEvent): DamageResult {
    const result: DamageResult = {
      shieldDamage: 0,
      healthDamage: 0,
      shieldBroke: false,
      died: false,
      headshotKill: false,
    };
    if (!this.alive) return result;

    this.timeSinceDamage = 0;

    if (event.melee === 'back') {
      result.shieldDamage = this.shield;
      result.healthDamage = this.health;
      this.kill(result);
      return result;
    }

    // Headshot gating: precision headshots instakill ONLY with shields down.
    // With any shield up they are ordinary body damage.
    if (event.headshot && this.shield <= 0) {
      result.healthDamage = this.health;
      result.headshotKill = true;
      this.kill(result);
      return result;
    }

    const shieldBefore = this.shield;
    const absorbed = Math.min(this.shield, event.amount);
    this.shield -= absorbed;
    result.shieldDamage = absorbed;

    const spill = event.amount - absorbed;
    if (spill > 0) {
      result.healthDamage = Math.min(this.health, spill);
      this.health -= result.healthDamage;
    }

    if (shieldBefore > 0 && this.shield <= 0) {
      this.shield = 0;
      result.shieldBroke = true;
      this.onShieldBreak?.();
    }
    if (this.health <= 0) {
      this.health = 0;
      this.kill(result);
    }
    return result;
  }

  /** Advance recharge clocks by one fixed step. */
  tick(dt: number): void {
    if (!this.alive) return;
    this.timeSinceDamage += dt;
    if (this.recharging) {
      const rate = VITALS.MAX_SHIELD / VITALS.RECHARGE_DURATION;
      this.shield = Math.min(VITALS.MAX_SHIELD, this.shield + rate * dt);
    }
  }

  /** Overshield pickup: shield jumps to 300. Decays only via damage; the
   * recharge system never refills above the normal 100 cap. */
  applyOvershield(): void {
    if (!this.alive) return;
    this.shield = VITALS.OVERSHIELD_MAX;
  }

  meleeFront(): DamageResult {
    return this.applyDamage({ amount: VITALS.MELEE_DAMAGE, melee: 'front' });
  }

  meleeBack(): DamageResult {
    return this.applyDamage({ amount: VITALS.MELEE_DAMAGE, melee: 'back' });
  }

  respawn(): void {
    this.shield = VITALS.MAX_SHIELD;
    this.health = VITALS.MAX_HEALTH;
    this.alive = true;
    this.timeSinceDamage = Infinity;
  }

  private kill(result: DamageResult): void {
    this.shield = 0;
    this.health = 0;
    this.alive = false;
    result.died = true;
  }
}
