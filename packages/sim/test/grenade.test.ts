import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createGrenade,
  stepGrenade,
  grenadeDamageAt,
  GRENADE,
  TICK,
} from '../src/index';

const DT = TICK.DT;

function throwAndRun() {
  const g = createGrenade({ x: 0, y: 1.6, z: 0 }, { x: 6, y: 4, z: 1.5 });
  let ticks = 0;
  while (!g.detonated && ticks < 1000) {
    stepGrenade(g, DT);
    ticks++;
  }
  return { g, ticks };
}

describe('PRD §5.4/§9.2 grenade acceptance', () => {
  it('a fixed throw lands at a deterministic position across 100 runs', () => {
    const reference = throwAndRun();
    assert.equal(reference.g.detonated, true);
    for (let run = 0; run < 99; run++) {
      const { g, ticks } = throwAndRun();
      assert.equal(g.position.x, reference.g.position.x);
      assert.equal(g.position.y, reference.g.position.y);
      assert.equal(g.position.z, reference.g.position.z);
      assert.equal(ticks, reference.ticks);
    }
  });

  it('fuse detonates at ~2.5 s', () => {
    const { g, ticks } = throwAndRun();
    assert.ok(Math.abs(ticks * DT - GRENADE.FUSE) <= DT + 1e-9, `fuse at ${ticks * DT}s`);
    assert.equal(g.detonated, true);
  });

  it('bounces lose energy (restitution ~0.3)', () => {
    const g = createGrenade({ x: 0, y: 2, z: 0 }, { x: 0, y: 0, z: 0 });
    let prevY = g.velocity.y;
    // Fall to first bounce.
    while (g.velocity.y <= 0 && !g.detonated) {
      prevY = -g.velocity.y;
      stepGrenade(g, DT);
    }
    assert.ok(g.velocity.y <= prevY * GRENADE.RESTITUTION + 0.05, 'bounce dampened');
  });

  it('radial damage falls off linearly to zero at the blast radius', () => {
    assert.equal(grenadeDamageAt(0), GRENADE.DAMAGE_MAX);
    assert.equal(grenadeDamageAt(GRENADE.DAMAGE_RADIUS / 2), GRENADE.DAMAGE_MAX / 2);
    assert.equal(grenadeDamageAt(GRENADE.DAMAGE_RADIUS), 0);
    assert.equal(grenadeDamageAt(GRENADE.DAMAGE_RADIUS + 3), 0);
  });

  it('stepping a detonated grenade is a no-op', () => {
    const { g } = throwAndRun();
    const frozen = { ...g.position };
    assert.equal(stepGrenade(g, DT), false);
    assert.deepEqual(g.position, frozen);
  });
});
