import type { Vec3 } from './movement';

/**
 * Data-driven arena layout, consumed by BOTH the server (Rapier
 * colliders) and the client (Three.js meshes) so physics and visuals
 * can never drift apart. All shapes are (optionally rotated) boxes —
 * ramps are tilted boxes, which keeps the collider side trivial.
 * Units: meters, Y-up, sizes are full extents.
 */

export interface ArenaBlock {
  /** Center position. */
  pos: [number, number, number];
  /** Full width/height/depth. */
  size: [number, number, number];
  /** Euler XYZ rotation in degrees (optional). */
  rot?: [number, number, number];
  /** Client tint (hex). Defaults to graybox. */
  color?: number;
}

export const ARENA = {
  /** Half-extent of the square play space. */
  HALF_SIZE: 32,
  WALL_HEIGHT: 7,
  FLOOR_COLOR: 0x5c6168,
  WALL_COLOR: 0x3a3f47,
} as const;

const GRAY = 0x757c86;
const DARK = 0x565d68;
const RED = 0x8a4a42;
const BLUE = 0x44618a;
const RAMP = 0x6a7280;

/** Tilted-box ramp helper: a slab whose top surface climbs `rise` over
 * `run` along the local -Z axis, then yaw-rotated. */
function ramp(
  cx: number,
  cz: number,
  rise: number,
  run: number,
  width: number,
  yawDeg: number,
  color = RAMP,
): ArenaBlock {
  const length = Math.hypot(run, rise);
  const tilt = (Math.atan2(rise, run) * 180) / Math.PI;
  return {
    pos: [cx, rise / 2, cz],
    size: [width, 0.4, length + 0.4],
    rot: [tilt, yawDeg, 0],
    color,
  };
}

/** Static level geometry (excludes floor + perimeter walls, which are
 * derived from ARENA constants). */
export const ARENA_BLOCKS: ArenaBlock[] = [
  // ---- Central platform (the "hill") with four ramps ----
  { pos: [0, 2.8, 0], size: [13, 0.6, 13], color: GRAY },
  { pos: [-5.5, 1.25, -5.5], size: [1.2, 2.5, 1.2], color: DARK },
  { pos: [5.5, 1.25, -5.5], size: [1.2, 2.5, 1.2], color: DARK },
  { pos: [-5.5, 1.25, 5.5], size: [1.2, 2.5, 1.2], color: DARK },
  { pos: [5.5, 1.25, 5.5], size: [1.2, 2.5, 1.2], color: DARK },
  ramp(0, 10.2, 2.8, 7.6, 5, 0),
  ramp(0, -10.2, 2.8, 7.6, 5, 180),
  ramp(10.2, 0, 2.8, 7.6, 5, 90),
  ramp(-10.2, 0, 2.8, 7.6, 5, 270),
  // Cover lips on the platform edges.
  { pos: [-6.2, 3.55, 0], size: [0.5, 0.9, 5], color: DARK },
  { pos: [6.2, 3.55, 0], size: [0.5, 0.9, 5], color: DARK },

  // ---- Red base (north, -Z): elevated deck, back wall, ramps ----
  { pos: [0, 2.2, -26], size: [18, 0.5, 8], color: GRAY },
  { pos: [0, 3.7, -30.7], size: [18, 3, 0.8], color: RED },
  { pos: [-8.6, 1.1, -26], size: [0.8, 2.2, 8], color: RED },
  { pos: [8.6, 1.1, -26], size: [0.8, 2.2, 8], color: RED },
  ramp(-5.5, -19.4, 2.2, 5, 4, 180, RED),
  ramp(5.5, -19.4, 2.2, 5, 4, 180, RED),
  // Base roof strip for cover.
  { pos: [0, 5.4, -29], size: [10, 0.4, 3], color: DARK },
  { pos: [-4.6, 3.9, -29], size: [0.6, 2.6, 3], color: DARK },
  { pos: [4.6, 3.9, -29], size: [0.6, 2.6, 3], color: DARK },

  // ---- Blue base (south, +Z), mirrored ----
  { pos: [0, 2.2, 26], size: [18, 0.5, 8], color: GRAY },
  { pos: [0, 3.7, 30.7], size: [18, 3, 0.8], color: BLUE },
  { pos: [-8.6, 1.1, 26], size: [0.8, 2.2, 8], color: BLUE },
  { pos: [8.6, 1.1, 26], size: [0.8, 2.2, 8], color: BLUE },
  ramp(-5.5, 19.4, 2.2, 5, 4, 0, BLUE),
  ramp(5.5, 19.4, 2.2, 5, 4, 0, BLUE),
  { pos: [0, 5.4, 29], size: [10, 0.4, 3], color: DARK },
  { pos: [-4.6, 3.9, 29], size: [0.6, 2.6, 3], color: DARK },
  { pos: [4.6, 3.9, 29], size: [0.6, 2.6, 3], color: DARK },

  // ---- West bridge: elevated walkway with ramps at both ends ----
  { pos: [-22, 3.2, 0], size: [4.5, 0.5, 20], color: GRAY },
  { pos: [-22, 1.5, -8], size: [1.2, 3, 1.2], color: DARK },
  { pos: [-22, 1.5, 0], size: [1.2, 3, 1.2], color: DARK },
  { pos: [-22, 1.5, 8], size: [1.2, 3, 1.2], color: DARK },
  ramp(-22, 14.2, 3.2, 8, 4, 0),
  ramp(-22, -14.2, 3.2, 8, 4, 180),
  // Bridge side rails.
  { pos: [-24.05, 3.9, 0], size: [0.4, 0.9, 20], color: DARK },

  // ---- East tower with crate jump-up (vehicle side stays open) ----
  { pos: [24, 1.9, -12], size: [5.5, 3.8, 5.5], color: GRAY },
  { pos: [20.2, 0.6, -9], size: [2.2, 1.2, 2.2], color: DARK },
  { pos: [21.4, 1.5, -11.4], size: [2.2, 1.2, 2.2], color: DARK },
  { pos: [24, 4.35, -14.45], size: [5.5, 1.1, 0.6], color: DARK },

  // ---- Scattered mid-field cover ----
  { pos: [-12, 0.75, -12], size: [2.6, 1.5, 2.6], color: DARK },
  { pos: [12, 0.75, 12], size: [2.6, 1.5, 2.6], color: DARK },
  { pos: [-13, 1.1, 10], size: [1, 2.2, 4], color: GRAY },
  { pos: [13, 1.1, -10], size: [1, 2.2, 4], color: GRAY },
  { pos: [-5, 0.6, 16], size: [3, 1.2, 1.6], color: DARK },
  { pos: [5, 0.6, -16], size: [3, 1.2, 1.6], color: DARK },
  { pos: [18, 0.9, 20], size: [1.8, 1.8, 1.8], color: GRAY },
  { pos: [-18, 0.9, -20], size: [1.8, 1.8, 1.8], color: GRAY },
];

/** Ground-level + deck navigation waypoints for bot AI. */
export const ARENA_WAYPOINTS: Vec3[] = [
  { x: 0, y: 0, z: 0 }, // under/near the hill (bots path via ramps visually)
  { x: 0, y: 0, z: 14.5 },
  { x: 0, y: 0, z: -14.5 },
  { x: 14.5, y: 0, z: 0 },
  { x: -14.5, y: 0, z: 0 },
  { x: 0, y: 2.45, z: -26 }, // red deck
  { x: 0, y: 2.45, z: 26 }, // blue deck
  { x: -12, y: 0, z: -12 },
  { x: 12, y: 0, z: 12 },
  { x: 18, y: 0, z: 20 },
  { x: -18, y: 0, z: -20 },
  { x: 24, y: 0, z: 4 }, // open east field
  { x: 20, y: 0, z: -4 },
  { x: -8, y: 0, z: 20 },
  { x: 8, y: 0, z: -20 },
  { x: 0, y: 3.1, z: 0 }, // hilltop
];

/** Player spawn points (capsule-center height is applied by the server). */
export const ARENA_SPAWNS: Vec3[] = [
  { x: -4, y: 4, z: -25 },
  { x: 4, y: 4, z: -25 },
  { x: -4, y: 4, z: 25 },
  { x: 4, y: 4, z: 25 },
  { x: -26, y: 2, z: -14 },
  { x: 26, y: 2, z: 14 },
];

/** Where the Warthog spawns (east field, kept open for driving). */
export const ARENA_VEHICLE_SPAWN: Vec3 = { x: 22, y: 1.5, z: 8 };

export function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

export interface Quat {
  x: number;
  y: number;
  z: number;
  w: number;
}

/** Intrinsic XYZ euler (degrees) → quaternion, matching THREE.Euler's
 * default order so server colliders and client meshes rotate alike. */
export function eulerXYZDegToQuat(rot: [number, number, number]): Quat {
  const x = degToRad(rot[0]) / 2;
  const y = degToRad(rot[1]) / 2;
  const z = degToRad(rot[2]) / 2;
  const cx = Math.cos(x), sx = Math.sin(x);
  const cy = Math.cos(y), sy = Math.sin(y);
  const cz = Math.cos(z), sz = Math.sin(z);
  return {
    x: sx * cy * cz + cx * sy * sz,
    y: cx * sy * cz - sx * cy * sz,
    z: cx * cy * sz + sx * sy * cz,
    w: cx * cy * cz - sx * sy * sz,
  };
}
