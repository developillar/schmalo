import { FORGE } from './constants';
import type { Vec3 } from './movement';

export type ForgeObjectType =
  | 'spawn_point'
  | 'weapon_spawn'
  | 'vehicle_spawn'
  | 'block_box'
  | 'block_ramp'
  | 'block_wall'
  | 'block_platform'
  | 'objective';

/** Fixed/Phased: static, ignores gravity, may intersect anything.
 *  Normal/Physics: dynamic rigidbody, falls and settles. */
export type ForgePhysicsMode = 'fixed' | 'normal';

export type GravityScale = (typeof FORGE.GRAVITY_SCALES)[number];

export interface ForgeObjectProps {
  team?: 'red' | 'blue' | 'neutral';
  respawn?: boolean;
  respawnTime?: number;
  /** For weapon_spawn: which weapon. */
  weapon?: string;
  /** For vehicle_spawn: which vehicle. */
  vehicle?: string;
}

export interface ForgeObject {
  id: string;
  type: ForgeObjectType;
  position: Vec3;
  /** Euler XYZ, radians. */
  rotation: Vec3;
  scale: Vec3;
  physics: ForgePhysicsMode;
  props: ForgeObjectProps;
}

export interface MapSettings {
  gravityScale: GravityScale;
  objectBudget: number;
}

export interface ForgeMap {
  version: number;
  name: string;
  settings: MapSettings;
  objects: ForgeObject[];
}

const OBJECT_TYPES: readonly ForgeObjectType[] = [
  'spawn_point',
  'weapon_spawn',
  'vehicle_spawn',
  'block_box',
  'block_ramp',
  'block_wall',
  'block_platform',
  'objective',
];

export function createEmptyMap(name: string): ForgeMap {
  return {
    version: FORGE.FORMAT_VERSION,
    name,
    settings: { gravityScale: 1, objectBudget: FORGE.DEFAULT_BUDGET },
    objects: [],
  };
}

/** Add an object, enforcing the flat budget cap. Returns false if over. */
export function addObject(map: ForgeMap, object: ForgeObject): boolean {
  if (map.objects.length >= map.settings.objectBudget) return false;
  map.objects.push(object);
  return true;
}

export function removeObject(map: ForgeMap, id: string): boolean {
  const index = map.objects.findIndex((o) => o.id === id);
  if (index < 0) return false;
  map.objects.splice(index, 1);
  return true;
}

export function duplicateObject(map: ForgeMap, id: string, newId: string): ForgeObject | null {
  const source = map.objects.find((o) => o.id === id);
  if (!source) return null;
  const clone = cloneObject(source);
  clone.id = newId;
  if (!addObject(map, clone)) return null;
  return clone;
}

/** Snap an angle (radians) to the given snap increment (degrees). */
export function snapAngle(radians: number, snapDeg: number): number {
  const snapRad = (snapDeg * Math.PI) / 180;
  return Math.round(radians / snapRad) * snapRad;
}

/** Serialize a map to JSON with a stable field order, so identical maps
 * always produce identical strings. */
export function serializeMap(map: ForgeMap): string {
  return JSON.stringify(
    {
      version: map.version,
      name: map.name,
      settings: {
        gravityScale: map.settings.gravityScale,
        objectBudget: map.settings.objectBudget,
      },
      objects: map.objects.map((o) => ({
        id: o.id,
        type: o.type,
        position: vec(o.position),
        rotation: vec(o.rotation),
        scale: vec(o.scale),
        physics: o.physics,
        props: {
          ...(o.props.team !== undefined && { team: o.props.team }),
          ...(o.props.respawn !== undefined && { respawn: o.props.respawn }),
          ...(o.props.respawnTime !== undefined && { respawnTime: o.props.respawnTime }),
          ...(o.props.weapon !== undefined && { weapon: o.props.weapon }),
          ...(o.props.vehicle !== undefined && { vehicle: o.props.vehicle }),
        },
      })),
    },
    null,
    2,
  );
}

/** Parse + validate a serialized map. Throws on malformed input so a bad
 * file can never half-load into the world. */
export function deserializeMap(json: string): ForgeMap {
  const raw: unknown = JSON.parse(json);
  if (typeof raw !== 'object' || raw === null) throw new Error('forge map: not an object');
  const data = raw as Record<string, unknown>;

  if (data.version !== FORGE.FORMAT_VERSION) {
    throw new Error(`forge map: unsupported version ${String(data.version)}`);
  }
  if (typeof data.name !== 'string') throw new Error('forge map: missing name');

  const settingsRaw = data.settings as Record<string, unknown> | undefined;
  if (!settingsRaw) throw new Error('forge map: missing settings');
  const gravityScale = settingsRaw.gravityScale as GravityScale;
  if (!FORGE.GRAVITY_SCALES.includes(gravityScale)) {
    throw new Error(`forge map: invalid gravityScale ${String(settingsRaw.gravityScale)}`);
  }
  const objectBudget = settingsRaw.objectBudget;
  if (typeof objectBudget !== 'number' || objectBudget <= 0) {
    throw new Error('forge map: invalid objectBudget');
  }

  if (!Array.isArray(data.objects)) throw new Error('forge map: missing objects');
  if (data.objects.length > objectBudget) throw new Error('forge map: over budget');

  const objects = data.objects.map((entry: unknown, i: number): ForgeObject => {
    const o = entry as Record<string, unknown>;
    if (typeof o.id !== 'string') throw new Error(`forge object ${i}: missing id`);
    if (!OBJECT_TYPES.includes(o.type as ForgeObjectType)) {
      throw new Error(`forge object ${i}: unknown type ${String(o.type)}`);
    }
    if (o.physics !== 'fixed' && o.physics !== 'normal') {
      throw new Error(`forge object ${i}: invalid physics mode ${String(o.physics)}`);
    }
    return {
      id: o.id,
      type: o.type as ForgeObjectType,
      position: readVec(o.position, `object ${i} position`),
      rotation: readVec(o.rotation, `object ${i} rotation`),
      scale: readVec(o.scale, `object ${i} scale`),
      physics: o.physics,
      props: (o.props ?? {}) as ForgeObjectProps,
    };
  });

  return {
    version: FORGE.FORMAT_VERSION,
    name: data.name,
    settings: { gravityScale, objectBudget },
    objects,
  };
}

function cloneObject(o: ForgeObject): ForgeObject {
  return {
    id: o.id,
    type: o.type,
    position: { ...o.position },
    rotation: { ...o.rotation },
    scale: { ...o.scale },
    physics: o.physics,
    props: { ...o.props },
  };
}

function vec(v: Vec3): Vec3 {
  return { x: v.x, y: v.y, z: v.z };
}

function readVec(value: unknown, label: string): Vec3 {
  const v = value as Record<string, unknown> | undefined;
  if (
    !v ||
    typeof v.x !== 'number' ||
    typeof v.y !== 'number' ||
    typeof v.z !== 'number' ||
    !Number.isFinite(v.x) ||
    !Number.isFinite(v.y) ||
    !Number.isFinite(v.z)
  ) {
    throw new Error(`forge map: invalid ${label}`);
  }
  return { x: v.x, y: v.y, z: v.z };
}
