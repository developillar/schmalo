export const NET = {
  TICK_RATE: 60,
  SNAPSHOT_RATE: 20,
};

export const PLAYER = {
  RADIUS: 0.35,
  STANDING_HEIGHT: 2.13,
  CROUCHED_HEIGHT: 1.45,
  MOVE_SPEED: 7.6,
  CROUCH_SPEED_MULTIPLIER: 0.6,
  AIR_CONTROL: 0.35,
  GRAVITY: 6.0,
  JUMP_VELOCITY: 4.14,
  GROUND_ACCEL: 55,
  GROUND_DECEL: 30,
  AIR_ACCEL: 18,
  MAX_PITCH_RAD: Math.PI / 2 - 0.01,
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
