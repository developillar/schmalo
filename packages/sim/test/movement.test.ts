import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createMoveState,
  stepMovement,
  MOVEMENT,
  TICK,
  type MoveInput,
} from '../src/index';

const DT = TICK.DT;

function input(partial: Partial<MoveInput> = {}): MoveInput {
  return { moveX: 0, moveZ: 0, yaw: 0, jump: false, crouch: false, ...partial };
}

function settle(state = createMoveState({ x: 0, y: 0, z: 0 })) {
  stepMovement(state, input(), DT);
  assert.equal(state.grounded, true);
  return state;
}

describe('PRD §5 movement acceptance', () => {
  it('jump from flat ground reaches apex 1.1 m ± 0.03 in 0.47 s ± 0.02', () => {
    const state = settle();
    stepMovement(state, input({ jump: true }), DT);
    let ticks = 1;
    let apex = state.position.y;
    let apexTick = ticks;
    while (!state.grounded && ticks < 600) {
      stepMovement(state, input(), DT);
      ticks++;
      if (state.position.y > apex) {
        apex = state.position.y;
        apexTick = ticks;
      }
    }
    const apexTime = apexTick * DT;
    assert.ok(Math.abs(apex - 1.1) <= 0.03, `apex ${apex.toFixed(4)} m out of 1.1±0.03`);
    assert.ok(Math.abs(apexTime - 0.47) <= 0.02, `apex time ${apexTime.toFixed(4)} s out of 0.47±0.02`);
    assert.equal(state.grounded, true, 'lands again');
  });

  it('horizontal launch velocity equals pre-jump horizontal velocity (±1%)', () => {
    const state = settle();
    // Run forward until at full speed.
    for (let i = 0; i < 120; i++) stepMovement(state, input({ moveZ: 1 }), DT);
    const before = Math.hypot(state.velocity.x, state.velocity.z);
    assert.ok(Math.abs(before - MOVEMENT.RUN_SPEED) < 0.01, 'at base run speed');

    stepMovement(state, input({ moveZ: 1, jump: true }), DT);
    assert.equal(state.grounded, false);
    const after = Math.hypot(state.velocity.x, state.velocity.z);
    assert.ok(Math.abs(after - before) / before <= 0.01, `momentum lost: ${before} -> ${after}`);

    // Holding forward mid-air never gains speed beyond the cap either.
    let peak = after;
    while (!state.grounded) {
      stepMovement(state, input({ moveZ: 1 }), DT);
      peak = Math.max(peak, Math.hypot(state.velocity.x, state.velocity.z));
    }
    assert.ok(peak <= MOVEMENT.RUN_SPEED + 1e-6, 'no air speed gain above cap');
  });

  it('sprint does not exist: no input state exceeds base run speed', () => {
    const state = settle();
    let max = 0;
    // 5 s of every straferun combination.
    for (let i = 0; i < 300; i++) {
      stepMovement(state, input({ moveZ: 1, moveX: i % 2 === 0 ? 1 : -1 }), DT);
      max = Math.max(max, Math.hypot(state.velocity.x, state.velocity.z));
    }
    assert.ok(max <= MOVEMENT.RUN_SPEED + 1e-6, `speed ${max} exceeded base run speed`);
  });

  it('strafing runs at full speed with no penalty', () => {
    const state = settle();
    for (let i = 0; i < 120; i++) stepMovement(state, input({ moveX: 1 }), DT);
    const speed = Math.hypot(state.velocity.x, state.velocity.z);
    assert.ok(Math.abs(speed - MOVEMENT.RUN_SPEED) < 0.01, `strafe speed ${speed}`);
  });

  it('crouch caps speed at crouch speed', () => {
    const state = settle();
    for (let i = 0; i < 120; i++) stepMovement(state, input({ moveZ: 1, crouch: true }), DT);
    const speed = Math.hypot(state.velocity.x, state.velocity.z);
    assert.ok(Math.abs(speed - MOVEMENT.CROUCH_SPEED) < 0.01, `crouch speed ${speed}`);
    assert.equal(state.crouched, true);
  });

  it('reaches base speed in ~0.12 s and stops in ~0.10 s', () => {
    const state = settle();
    let accelTicks = 0;
    while (Math.hypot(state.velocity.x, state.velocity.z) < MOVEMENT.RUN_SPEED - 0.01) {
      stepMovement(state, input({ moveZ: 1 }), DT);
      accelTicks++;
      assert.ok(accelTicks < 60, 'never reached run speed');
    }
    assert.ok(Math.abs(accelTicks * DT - 0.12) <= 0.03, `accel time ${accelTicks * DT}`);

    let stopTicks = 0;
    while (Math.hypot(state.velocity.x, state.velocity.z) > 0.01) {
      stepMovement(state, input(), DT);
      stopTicks++;
      assert.ok(stopTicks < 60, 'never stopped');
    }
    assert.ok(Math.abs(stopTicks * DT - 0.1) <= 0.03, `stop time ${stopTicks * DT}`);
  });

  it('coyote time: jump within 80 ms of walking off a ledge works, later does not', () => {
    // Within the window.
    let state = settle();
    stepMovement(state, input(), DT, { groundHeight: -5 }); // ledge disappears
    assert.equal(state.grounded, false);
    for (let i = 0; i < 3; i++) stepMovement(state, input(), DT, { groundHeight: -5 });
    stepMovement(state, input({ jump: true }), DT, { groundHeight: -5 });
    assert.ok(state.velocity.y > 4, 'coyote jump granted');

    // Past the window.
    state = settle();
    stepMovement(state, input(), DT, { groundHeight: -5 });
    for (let i = 0; i < 7; i++) stepMovement(state, input(), DT, { groundHeight: -5 });
    stepMovement(state, input({ jump: true }), DT, { groundHeight: -5 });
    assert.ok(state.velocity.y < 0, 'late jump rejected');
  });

  it('forge gravity slider scales the arc (0.5× gravity ≈ 2× apex)', () => {
    const state = settle();
    stepMovement(state, input({ jump: true }), DT, { gravityScale: 0.5 });
    let apex = 0;
    while (!state.grounded) {
      stepMovement(state, input(), DT, { gravityScale: 0.5 });
      apex = Math.max(apex, state.position.y);
    }
    assert.ok(Math.abs(apex - 2.206) < 0.06, `half-gravity apex ${apex}`);
  });
});
