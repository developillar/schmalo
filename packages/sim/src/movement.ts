import { MOVEMENT } from './constants';

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface MoveInput {
  /** Strafe axis, -1..1 (right positive). */
  moveX: number;
  /** Forward axis, -1..1 (forward positive). */
  moveZ: number;
  /** Look yaw in radians. */
  yaw: number;
  /** True on the tick the jump was pressed. */
  jump: boolean;
  crouch: boolean;
}

export interface MoveState {
  /** Feet position. */
  position: Vec3;
  velocity: Vec3;
  grounded: boolean;
  crouched: boolean;
  /** Seconds since leaving the ground without jumping (for coyote time). */
  coyoteTimer: number;
}

export interface MoveOptions {
  /** Forge gravity slider scalar (0, 0.5, 1, 1.5, 2). */
  gravityScale?: number;
  /** Y of the walkable floor under the player (flat-plane model). */
  groundHeight?: number;
}

export function createMoveState(spawn: Vec3): MoveState {
  return {
    position: { ...spawn },
    velocity: { x: 0, y: 0, z: 0 },
    grounded: false,
    crouched: false,
    coyoteTimer: Infinity,
  };
}

/**
 * One fixed-timestep movement tick. Pure and deterministic: same state +
 * input + dt always produces the same result, frame-rate independent at a
 * fixed 1/60 s step.
 *
 * Vertical motion integrates with a half-step gravity term
 * (y += v·dt − ½g·dt²) so the discrete trajectory samples the exact
 * ballistic arc — the apex matches h = v0²/(2g) from the PRD.
 */
export function stepMovement(
  state: MoveState,
  input: MoveInput,
  dt: number,
  opts: MoveOptions = {},
): void {
  const gravityScale = opts.gravityScale ?? 1;
  const groundHeight = opts.groundHeight ?? 0;

  // Wish direction in world space from yaw + move axes.
  const sinY = Math.sin(input.yaw);
  const cosY = Math.cos(input.yaw);
  let wishX = sinY * input.moveZ + cosY * input.moveX;
  let wishZ = cosY * input.moveZ - sinY * input.moveX;
  const wishLen = Math.hypot(wishX, wishZ);
  if (wishLen > 1e-8) {
    wishX /= wishLen;
    wishZ /= wishLen;
  }
  const hasWish = wishLen > 1e-8;

  state.crouched = input.crouch;
  const maxSpeed = input.crouch ? MOVEMENT.CROUCH_SPEED : MOVEMENT.RUN_SPEED;

  const vel = state.velocity;
  if (state.grounded) {
    // Accelerate toward wish velocity; friction decelerates toward zero.
    const targetX = wishX * maxSpeed;
    const targetZ = wishZ * maxSpeed;
    const accel = hasWish ? MOVEMENT.GROUND_ACCEL : MOVEMENT.GROUND_FRICTION_DECEL;
    const dX = targetX - vel.x;
    const dZ = targetZ - vel.z;
    const dLen = Math.hypot(dX, dZ);
    const maxDelta = accel * dt;
    if (dLen <= maxDelta || dLen < 1e-8) {
      vel.x = targetX;
      vel.z = targetZ;
    } else {
      vel.x += (dX / dLen) * maxDelta;
      vel.z += (dZ / dLen) * maxDelta;
    }
  } else if (hasWish) {
    // Air control: steerable but momentum-preserving. Never gain speed
    // above the larger of current speed and base run speed (no bunnyhop).
    const cap = Math.max(Math.hypot(vel.x, vel.z), MOVEMENT.RUN_SPEED);
    const airAccel = MOVEMENT.GROUND_ACCEL * MOVEMENT.AIR_CONTROL;
    vel.x += wishX * airAccel * dt;
    vel.z += wishZ * airAccel * dt;
    const speed = Math.hypot(vel.x, vel.z);
    if (speed > cap) {
      vel.x = (vel.x / speed) * cap;
      vel.z = (vel.z / speed) * cap;
    }
  }

  // Jump: allowed while grounded or within the coyote window after
  // walking off an edge. Horizontal velocity is untouched — you launch
  // at your current momentum.
  const coyoteOk = state.coyoteTimer < MOVEMENT.COYOTE_TIME && vel.y <= 0;
  if (input.jump && (state.grounded || coyoteOk)) {
    vel.y = MOVEMENT.JUMP_VELOCITY;
    state.grounded = false;
    state.coyoteTimer = Infinity;
  }

  // Integrate.
  state.position.x += vel.x * dt;
  state.position.z += vel.z * dt;
  if (!state.grounded) {
    const fallMult = vel.y < 0 ? MOVEMENT.FALL_MULTIPLIER : 1;
    const g = MOVEMENT.GRAVITY * gravityScale * fallMult;
    state.position.y += vel.y * dt - 0.5 * g * dt * dt;
    vel.y -= g * dt;
  }

  // Flat-floor resolution.
  if (state.position.y <= groundHeight && vel.y <= 0) {
    state.position.y = groundHeight;
    vel.y = 0;
    state.grounded = true;
    state.coyoteTimer = 0;
  } else if (state.grounded && state.position.y > groundHeight + 1e-6) {
    // Walked off a ledge: start the coyote window.
    state.grounded = false;
    state.coyoteTimer = 0;
  } else if (!state.grounded && state.coyoteTimer !== Infinity) {
    state.coyoteTimer += dt;
  }
}
