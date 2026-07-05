import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveVehicleImpact,
  Chaingun,
  SeatManager,
  Vitals,
  WARTHOG,
  TICK,
} from '../src/index';

const DT = TICK.DT;

describe('PRD §8 Warthog acceptance', () => {
  it('impact at ≥7 m/s is an instakill splatter', () => {
    for (const speed of [7, 9, 16]) {
      const impact = resolveVehicleImpact(speed);
      assert.equal(impact.splatter, true, `${speed} m/s should splatter`);
    }
  });

  it('impact at 3 m/s applies knockback + partial damage, not death', () => {
    const impact = resolveVehicleImpact(3);
    assert.equal(impact.splatter, false);
    assert.ok(impact.knockback > 0, 'has knockback');

    const target = new Vitals();
    target.applyDamage({ amount: impact.damage });
    assert.equal(target.alive, true, 'sub-splatter hit is survivable');
    assert.ok(target.shield < 100, 'but does damage');
  });

  it('turret overheats after sustained fire and locks until fully cooled', () => {
    const gun = new Chaingun();
    let fired = 0;
    let ticks = 0;
    while (!gun.overheated && ticks < 60 * 20) {
      fired += gun.update(DT, true);
      ticks++;
    }
    assert.equal(gun.overheated, true, 'overheated under sustained fire');
    assert.ok(fired > 20, 'fired plenty of rounds before overheating');

    // Locked while hot even if the trigger is held.
    for (let i = 0; i < 30; i++) {
      assert.equal(gun.update(DT, true), 0, 'no rounds while overheated');
    }
    assert.equal(gun.canFire, false);

    // Release the trigger; it cools and unlocks.
    let coolTicks = 0;
    while (gun.overheated && coolTicks < 60 * 10) {
      gun.update(DT, false);
      coolTicks++;
    }
    assert.equal(gun.overheated, false, 'unlocked after cooldown');
    assert.equal(gun.heat, 0, 'fully cooled');
  });

  it('turret has spin-up before rounds fire and spread widens while firing', () => {
    const gun = new Chaingun();
    let rounds = 0;
    // First 0.25 s: still spinning up.
    for (let t = 0; t < 0.25; t += DT) rounds += gun.update(DT, true);
    assert.equal(rounds, 0, 'no rounds during spin-up');
    const initialSpread = gun.spreadDeg;

    for (let t = 0; t < 1.5; t += DT) rounds += gun.update(DT, true);
    assert.ok(rounds > 10, 'rounds flow after spin-up');
    assert.ok(gun.spreadDeg > initialSpread, 'spread widened while firing');
  });

  it('three independent occupants can board and leave without duplication', () => {
    const seats = new SeatManager();
    assert.equal(seats.board('alice', 'driver'), true);
    assert.equal(seats.board('bob', 'gunner'), true);
    assert.equal(seats.board('carol', 'passenger'), true);

    assert.equal(seats.board('dave', 'driver'), false, 'seat already taken');
    assert.equal(seats.board('alice', 'passenger'), false, 'player already seated');
    assert.equal(seats.occupants.length, 3);

    assert.equal(seats.exit('alice'), true);
    assert.equal(seats.exit('alice'), false, 'double exit rejected');
    assert.equal(seats.occupantOf('driver'), null);
    assert.equal(seats.board('dave', 'driver'), true, 'freed seat is boardable');
    assert.equal(seats.occupants.length, 3);
  });

  it('splatter threshold constant matches the PRD (~7 m/s)', () => {
    assert.equal(WARTHOG.SPLATTER_SPEED, 7);
    assert.equal(resolveVehicleImpact(6.9).splatter, false);
  });
});
