import { MOVEMENT } from '@schmalo/sim';

export const NET = {
  TICK_RATE: 60,
  SNAPSHOT_RATE: 20,
};

/** Networked-player constants, derived from the PRD-tuned sim movement
 * module so the server, client prediction, and headless tests all agree. */
export const PLAYER = {
  RADIUS: MOVEMENT.CAPSULE_RADIUS,
  STANDING_HEIGHT: MOVEMENT.STANDING_HEIGHT,
  CROUCHED_HEIGHT: MOVEMENT.CROUCHED_HEIGHT,
  EYE_HEIGHT: MOVEMENT.EYE_HEIGHT,
  MOVE_SPEED: MOVEMENT.RUN_SPEED,
  CROUCH_SPEED: MOVEMENT.CROUCH_SPEED,
  GRAVITY: MOVEMENT.GRAVITY,
  JUMP_VELOCITY: MOVEMENT.JUMP_VELOCITY,
  MAX_PITCH_RAD: Math.PI / 2 - 0.01,
  /** Head hitbox: hits above this fraction of current height are headshots. */
  HEAD_FRACTION: 0.8,
};

export const COMBAT = {
  RESPAWN_DELAY: 5,
  MELEE_RANGE: 1.6,
  /** Attacker must be within this cone behind the target for an assassination. */
  BACK_MELEE_DOT: -0.35,
};

export const WORLD = {
  ROOM_NAME: 'sandbox',
  MAX_PLAYERS: 8,
  SPAWN_POSITIONS: [
    { x: 0, y: 4, z: 0 },
    { x: 3, y: 4, z: 0 },
    { x: -3, y: 4, z: 0 },
    { x: 0, y: 4, z: 3 },
  ],
};

export const DEBUG = {
  RECONCILE_EPSILON: 0.015,
};
