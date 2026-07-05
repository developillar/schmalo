import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { Vitals, VITALS, TICK } from '../src/index';

const DT = TICK.DT;

function tickFor(v: Vitals, seconds: number): void {
  const steps = Math.round(seconds / DT);
  for (let i = 0; i < steps; i++) v.tick(DT);
}

describe('PRD §6 damage/shield acceptance', () => {
  it('100 dmg then 5.0 s wait → shield begins refilling; full at ~7.0 s total', () => {
    const v = new Vitals();
    v.applyDamage({ amount: 100 });
    assert.equal(v.shield, 0);
    assert.equal(v.health, VITALS.MAX_HEALTH);

    tickFor(v, 4.99);
    assert.equal(v.shield, 0, 'no recharge before the 5 s delay');

    tickFor(v, 0.1); // past 5.0 s
    assert.ok(v.shield > 0, 'recharge started after delay');

    const v2 = new Vitals();
    v2.applyDamage({ amount: 100 });
    tickFor(v2, 6.0);
    assert.ok(v2.shield > 40 && v2.shield < 60, `midway through recharge: ${v2.shield}`);
    tickFor(v2, 1.1); // ~7.1 s total
    assert.equal(v2.shield, VITALS.MAX_SHIELD, 'full at ~7 s');
  });

  it('damage at t=4.9 s resets delay; shield still 0 at t=6.0 s', () => {
    const v = new Vitals();
    v.applyDamage({ amount: 100 });
    tickFor(v, 4.9);
    v.applyDamage({ amount: 10 });
    tickFor(v, 1.1); // t = 6.0
    assert.equal(v.shield, 0, 'recharge delay was reset');
  });

  it('headshot with shield>0 → body damage; with shield==0 → instant death', () => {
    const shielded = new Vitals();
    const result = shielded.applyDamage({ amount: 11.2, headshot: true });
    assert.equal(result.died, false);
    assert.ok(Math.abs(shielded.shield - 88.8) < 1e-9);
    assert.equal(shielded.health, VITALS.MAX_HEALTH);

    const popped = new Vitals();
    popped.applyDamage({ amount: 100 });
    assert.equal(popped.shield, 0);
    const kill = popped.applyDamage({ amount: 11.2, headshot: true });
    assert.equal(kill.died, true);
    assert.equal(kill.headshotKill, true);
  });

  it('health never increases except on respawn', () => {
    const v = new Vitals();
    v.applyDamage({ amount: 120 }); // 100 shield + 20 into health
    assert.equal(v.health, 25);
    tickFor(v, 30);
    assert.equal(v.shield, VITALS.MAX_SHIELD, 'shield recharged');
    assert.equal(v.health, 25, 'health did not regenerate');
    v.respawn();
    assert.equal(v.health, VITALS.MAX_HEALTH);
    assert.equal(v.shield, VITALS.MAX_SHIELD);
  });

  it('back melee kills a full-shield target in one hit', () => {
    const v = new Vitals();
    const result = v.meleeBack();
    assert.equal(result.died, true);
    assert.equal(v.alive, false);
  });

  it('front melee breaks a full shield in 2 hits, or 1 hit + any chip', () => {
    const two = new Vitals();
    const first = two.meleeFront();
    assert.equal(first.shieldBroke, false);
    assert.ok(two.shield > 0);
    const second = two.meleeFront();
    assert.equal(second.shieldBroke, true);

    const chipped = new Vitals();
    chipped.applyDamage({ amount: 30 });
    const hit = chipped.meleeFront();
    assert.equal(hit.shieldBroke, true);
  });

  it('shield-pop fires the onShieldBreak event exactly once', () => {
    const v = new Vitals();
    let pops = 0;
    v.onShieldBreak = () => pops++;
    v.applyDamage({ amount: 60 });
    assert.equal(pops, 0);
    v.applyDamage({ amount: 60 });
    assert.equal(pops, 1);
    v.applyDamage({ amount: 10 });
    assert.equal(pops, 1, 'no re-pop while shield stays down');
  });

  it('overshield stacks to 300, decays only via damage, never recharges above 100', () => {
    const v = new Vitals();
    v.applyOvershield();
    assert.equal(v.shield, VITALS.OVERSHIELD_MAX);
    tickFor(v, 30);
    assert.equal(v.shield, VITALS.OVERSHIELD_MAX, 'no decay over time');

    v.applyDamage({ amount: 150 });
    assert.equal(v.shield, 150);
    tickFor(v, 30);
    assert.equal(v.shield, 150, 'no recharge while above the normal cap');

    v.applyDamage({ amount: 100 });
    assert.equal(v.shield, 50);
    tickFor(v, 30);
    assert.equal(v.shield, VITALS.MAX_SHIELD, 'recharges only to the normal 100 cap');
  });
});
