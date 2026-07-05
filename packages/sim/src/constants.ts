/**
 * All combat/physics tuning constants from the Blam.js PRD.
 *
 * These are the "starting constants that are internally consistent" — the
 * ground truth is the feel targets asserted by the headless tests
 * (jump apex 1.1 m / 0.47 s, 4-shot BR kill, 5 s + 2 s shield recharge).
 * Tune here, re-run tests, lock.
 */

export const TICK = {
  RATE: 60,
  DT: 1 / 60,
} as const;

export const MOVEMENT = {
  /** m/s², positive magnitude. Apex = v0²/(2g) = 4.65²/19.6 ≈ 1.103 m. */
  GRAVITY: 9.8,
  /** m/s. Time to apex = v0/g ≈ 0.474 s. */
  JUMP_VELOCITY: 4.65,
  /** Applied to gravity only while falling (tune 1.0–1.4). */
  FALL_MULTIPLIER: 1.0,
  /** Seconds of forgiveness for edge jumps. */
  COYOTE_TIME: 0.08,
  /** m/s. No sprint exists — Halo 3 has none. Do not add one. */
  RUN_SPEED: 5.4,
  CROUCH_SPEED: 2.4,
  /** Reach base speed in ~0.12 s → 5.4 / 0.12. */
  GROUND_ACCEL: 45,
  /** Stop in ~0.10 s → 5.4 / 0.10. */
  GROUND_FRICTION_DECEL: 54,
  /** Air accel = AIR_CONTROL × GROUND_ACCEL. */
  AIR_CONTROL: 0.45,
  STANDING_HEIGHT: 2.1,
  CROUCHED_HEIGHT: 1.3,
  EYE_HEIGHT: 1.9,
  CAPSULE_RADIUS: 0.4,
} as const;

export const VITALS = {
  MAX_SHIELD: 100,
  /** Does NOT regenerate (Halo 3 — no health packs). Restored on respawn only. */
  MAX_HEALTH: 45,
  /** Seconds after the LAST damage before shield recharge starts. */
  RECHARGE_DELAY: 5.0,
  /** Seconds for a full 0 → 100 recharge once started. */
  RECHARGE_DURATION: 2.0,
  /** Overshield pickup: stacked shield up to 300 effective. Decays via damage only. */
  OVERSHIELD_MAX: 300,
  /** Front melee: breaks a full shield in 2 hits (2 × 73 = 146 > 145 total EHP). */
  MELEE_DAMAGE: 73,
} as const;

export const BATTLE_RIFLE = {
  MAGAZINE: 36,
  RESERVE: 108,
  ROUNDS_PER_BURST: 3,
  /** 3 rounds over ~0.075 s — the fast "brrt". */
  INTRA_BURST_INTERVAL: 0.0375,
  /** Min seconds between burst starts (~2.5–3 bursts/s max). */
  INTER_BURST_INTERVAL: 0.25,
  /** ~11.2 → 9 bullets (3 bursts) strip a 100 shield; 4th-burst headshot kills. */
  BODY_DAMAGE: 11.2,
  /** Beyond this range, falloff makes it a 5-burst kill (flagged). */
  FALLOFF_RANGE: 30,
  /** 12 bullets × 8.5 = 102 → 4 bursts to strip shield at range, kill on 5th. */
  FALLOFF_BODY_DAMAGE: 8.5,
  RELOAD_EMPTY: 2.2,
  RELOAD_TACTICAL: 1.8,
  SPREAD_BASE_DEG: 0.4,
  SPREAD_BLOOM_DEG: 1.0,
  ZOOM_FACTOR: 2,
} as const;

export const GRENADE = {
  FUSE: 2.5,
  RESTITUTION: 0.3,
  /** Horizontal velocity kept on each bounce (roll friction). */
  BOUNCE_FRICTION: 0.7,
  RADIUS: 0.09,
  THROW_SPEED: 12,
  DAMAGE_MAX: 110,
  DAMAGE_RADIUS: 4.0,
  START_COUNT: 2,
  MAX_COUNT: 4,
} as const;

export const WARTHOG = {
  MASS: 3000,
  TOP_SPEED: 16,
  SUSPENSION_TRAVEL: 0.3,
  /** Relative speed at/above which impact is an instakill splatter. */
  SPLATTER_SPEED: 7,
  /** Sub-splatter impacts: damage per m/s of relative speed. */
  IMPACT_DAMAGE_PER_MS: 15,
  /** Knockback impulse scale per m/s of relative speed. */
  IMPACT_KNOCKBACK_PER_MS: 0.8,
  SEATS: ['driver', 'passenger', 'gunner'] as const,
} as const;

export const CHAINGUN = {
  /** Seconds of held trigger before rounds start firing. */
  SPINUP: 0.3,
  ROUNDS_PER_SECOND: 10,
  BODY_DAMAGE: 8,
  /** Heat gained per second of fire (1.0 = overheat) → ~3.3 s sustained. */
  HEAT_PER_SECOND: 0.3,
  /** Heat shed per second when not firing. */
  COOL_PER_SECOND: 0.5,
  SPREAD_BASE_DEG: 1.0,
  SPREAD_MAX_DEG: 4.0,
  /** Seconds of sustained fire to reach max spread. */
  SPREAD_RAMP: 2.0,
} as const;

export const FORGE = {
  /** Flat object cap (MVP budget model). */
  DEFAULT_BUDGET: 256,
  GRAVITY_SCALES: [0, 0.5, 1, 1.5, 2] as const,
  ROTATION_SNAPS_DEG: [15, 45, 90] as const,
  FORMAT_VERSION: 1,
} as const;

export const HUD = {
  /** Motion tracker radius in meters. */
  RADAR_RANGE: 18,
} as const;
