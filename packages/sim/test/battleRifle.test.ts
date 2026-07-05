import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  BattleRifle,
  Vitals,
  brDamagePerBullet,
  BATTLE_RIFLE,
  TICK,
} from '../src/index';

const DT = TICK.DT;

/** Fire complete bursts at a target until it dies (or maxBursts), applying
 * body damage for all bursts before `headshotFromBurst` and headshots after
 * shields are down from that burst on. Returns bursts fired. */
function fireUntilDead(
  target: Vitals,
  distance: number,
  maxBursts = 12,
): number {
  const br = new BattleRifle();
  let bursts = 0;
  let elapsed = 0;
  while (target.alive && elapsed < 30) {
    if (!br.bursting && !br.reloading && br.pullTrigger()) bursts++;
    for (const _round of br.update(DT)) {
      if (!target.alive) continue;
      const headshot = target.shield <= 0; // aim for the head once shields pop
      target.applyDamage({ amount: brDamagePerBullet(distance), headshot });
    }
    if (br.mag === 0 && !br.bursting) br.startReload();
    elapsed += DT;
    if (bursts > maxBursts) break;
  }
  return bursts;
}

describe('PRD §7 Battle Rifle acceptance', () => {
  it('full-health bot dies to exactly 4 bursts (3 body bursts + headshot burst)', () => {
    const target = new Vitals();
    const bursts = fireUntilDead(target, 10);
    assert.equal(bursts, 4, 'the classic 4-shot');
    assert.equal(target.alive, false);
  });

  it('9 body bullets strip a 100 shield', () => {
    const target = new Vitals();
    for (let i = 0; i < 8; i++) target.applyDamage({ amount: BATTLE_RIFLE.BODY_DAMAGE });
    assert.ok(target.shield > 0, 'shield survives 8 bullets');
    const ninth = target.applyDamage({ amount: BATTLE_RIFLE.BODY_DAMAGE });
    assert.equal(ninth.shieldBroke, true, 'shield pops on the 9th bullet');
  });

  it('range falloff makes it a 5-burst kill beyond 30 m (flag default on)', () => {
    const target = new Vitals();
    const bursts = fireUntilDead(target, 40);
    assert.equal(bursts, 5);
    assert.equal(brDamagePerBullet(40, false), BATTLE_RIFLE.BODY_DAMAGE, 'flag off → no falloff');
  });

  it('firing faster than the 0.25 s inter-burst cap is rejected', () => {
    const br = new BattleRifle();
    assert.equal(br.pullTrigger(), true);
    // Drain the burst (0.075 s), then spam inside the lockout window.
    for (let t = 0; t < 0.2; t += DT) {
      br.update(DT);
      assert.equal(br.pullTrigger(), false, `burst allowed at ${t.toFixed(3)}s`);
    }
    // Cross 0.25 s since burst start.
    for (let t = 0.2; t < 0.26; t += DT) br.update(DT);
    assert.equal(br.pullTrigger(), true, 'burst allowed after the interval');
  });

  it('burst cadence: 3 rounds over ~0.075 s', () => {
    const br = new BattleRifle();
    br.pullTrigger();
    const times: number[] = [];
    for (let i = 0; i < 10; i++) {
      for (const round of br.update(DT)) times.push(round.time);
    }
    assert.equal(times.length, 3);
    assert.ok(Math.abs(times[2] - times[0] - 0.075) < 1e-9, 'burst spans 0.075 s');
  });

  it('spread blooms from 0.4° to 1.0° across the burst', () => {
    const br = new BattleRifle();
    br.pullTrigger();
    const spreads: number[] = [];
    for (let i = 0; i < 10; i++) for (const r of br.update(DT)) spreads.push(r.spreadDeg);
    assert.deepEqual(spreads, [0.4, 0.7, 1.0]);
  });

  it('magazine decrements 3 per burst; reload refills from reserve; never negative', () => {
    const br = new BattleRifle();
    br.pullTrigger();
    for (let i = 0; i < 10; i++) br.update(DT);
    assert.equal(br.mag, 33);

    // Tactical reload: 1.8 s, tops up 3 rounds.
    assert.equal(br.startReload(), true);
    assert.equal(br.reloading, true);
    for (let t = 0; t < 1.7; t += DT) br.update(DT);
    assert.equal(br.reloading, true, 'still reloading at 1.7 s');
    for (let t = 0; t < 0.15; t += DT) br.update(DT);
    assert.equal(br.reloading, false);
    assert.equal(br.mag, 36);
    assert.equal(br.reserve, 105);

    // Burn everything; ammo can never go negative or over-cap.
    let guard = 0;
    while ((br.mag > 0 || br.reserve > 0) && guard++ < 20000) {
      if (br.mag === 0) {
        if (!br.startReload() && !br.reloading) break;
      } else {
        br.pullTrigger();
      }
      br.update(DT);
      assert.ok(br.mag >= 0 && br.mag <= 36, `mag out of range: ${br.mag}`);
      assert.ok(br.reserve >= 0 && br.reserve <= 108, `reserve out of range: ${br.reserve}`);
    }
    assert.equal(br.reserve, 0, 'reserve fully consumed');
  });

  it('empty reload takes 2.2 s vs 1.8 s tactical', () => {
    const br = new BattleRifle();
    // Empty the mag: 12 bursts.
    for (let b = 0; b < 12; b++) {
      br.pullTrigger();
      for (let t = 0; t < 0.3; t += DT) br.update(DT);
    }
    assert.equal(br.mag, 0);
    assert.equal(br.startReload(), true);
    for (let t = 0; t < 2.1; t += DT) br.update(DT);
    assert.equal(br.reloading, true, 'empty reload still going at 2.1 s');
    for (let t = 0; t < 0.15; t += DT) br.update(DT);
    assert.equal(br.mag, 36);
  });

  it('zoom toggles; taking damage while zoomed forces descope', () => {
    const br = new BattleRifle();
    assert.equal(br.zoomed, false);
    br.toggleZoom();
    assert.equal(br.zoomed, true);
    br.onDamaged();
    assert.equal(br.zoomed, false, 'descoped by damage');
    br.toggleZoom();
    br.toggleZoom();
    assert.equal(br.zoomed, false);
  });
});
