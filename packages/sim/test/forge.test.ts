import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createEmptyMap,
  addObject,
  removeObject,
  duplicateObject,
  serializeMap,
  deserializeMap,
  snapAngle,
  type ForgeObject,
} from '../src/index';

function block(id: string, overrides: Partial<ForgeObject> = {}): ForgeObject {
  return {
    id,
    type: 'block_box',
    position: { x: 1.25, y: 0.5, z: -3 },
    rotation: { x: 0, y: Math.PI / 4, z: 0 },
    scale: { x: 2, y: 1, z: 2 },
    physics: 'fixed',
    props: {},
    ...overrides,
  };
}

describe('PRD §11 Forge acceptance', () => {
  it('save → load round-trips a map identically (deep equal)', () => {
    const map = createEmptyMap('valhalla-not');
    map.settings.gravityScale = 1.5;
    addObject(map, block('b1'));
    addObject(map, block('r1', { type: 'block_ramp', physics: 'normal' }));
    addObject(
      map,
      block('hog', {
        type: 'vehicle_spawn',
        props: { vehicle: 'warthog', respawn: true, respawnTime: 30 },
      }),
    );
    addObject(map, block('s1', { type: 'spawn_point', props: { team: 'red' } }));
    addObject(map, block('s2', { type: 'spawn_point', props: { team: 'blue' } }));
    addObject(map, block('w1', { type: 'weapon_spawn', props: { weapon: 'battle_rifle' } }));

    const json = serializeMap(map);
    const loaded = deserializeMap(json);
    assert.deepEqual(loaded, map);

    // Serialization is stable: re-serializing the loaded map is identical.
    assert.equal(serializeMap(loaded), json);
  });

  it('enforces the object budget cap', () => {
    const map = createEmptyMap('tiny');
    map.settings.objectBudget = 2;
    assert.equal(addObject(map, block('a')), true);
    assert.equal(addObject(map, block('b')), true);
    assert.equal(addObject(map, block('c')), false, 'over budget rejected');
    assert.equal(map.objects.length, 2);

    // A hand-edited over-budget file is rejected on load too.
    const map2 = createEmptyMap('cheat');
    addObject(map2, block('a'));
    addObject(map2, block('b'));
    addObject(map2, block('c'));
    map2.settings.objectBudget = 2;
    assert.throws(() => deserializeMap(serializeMap(map2)), /over budget/);
  });

  it('supports delete and duplicate', () => {
    const map = createEmptyMap('edit');
    addObject(map, block('a'));
    const dup = duplicateObject(map, 'a', 'a2');
    assert.ok(dup);
    assert.equal(map.objects.length, 2);
    assert.notEqual(map.objects[0], map.objects[1], 'clone is a distinct object');
    assert.deepEqual({ ...dup, id: 'a' }, map.objects[0]);

    assert.equal(removeObject(map, 'a'), true);
    assert.equal(removeObject(map, 'a'), false);
    assert.equal(map.objects.length, 1);
  });

  it('validates on load: unknown types, bad physics, bad gravity, bad vectors', () => {
    const good = createEmptyMap('ok');
    addObject(good, block('a'));
    const json = serializeMap(good);

    assert.throws(() => deserializeMap(json.replace('block_box', 'teleporter_9000')), /unknown type/);
    assert.throws(() => deserializeMap(json.replace('"fixed"', '"floaty"')), /physics/);
    assert.throws(() => deserializeMap(json.replace('"gravityScale": 1', '"gravityScale": 3')), /gravityScale/);
    assert.throws(() => deserializeMap(json.replace('"x": 1.25', '"x": "NaN"')), /position/);
    assert.throws(() => deserializeMap('{"version": 99}'), /version/);
  });

  it('rotation snapping hits exact increments', () => {
    const deg = (d: number) => (d * Math.PI) / 180;
    assert.ok(Math.abs(snapAngle(deg(47), 45) - deg(45)) < 1e-12);
    assert.ok(Math.abs(snapAngle(deg(50), 15) - deg(45)) < 1e-12);
    assert.ok(Math.abs(snapAngle(deg(130), 90) - deg(90)) < 1e-12);
  });
});
