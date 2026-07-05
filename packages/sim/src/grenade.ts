import { GRENADE } from './constants';
import type { Vec3 } from './movement';

export interface GrenadeState {
  position: Vec3;
  velocity: Vec3;
  age: number;
  detonated: boolean;
}

export interface GrenadeOptions {
  gravityScale?: number;
  groundHeight?: number;
  /** m/s², positive magnitude. */
  gravity?: number;
}

export function createGrenade(position: Vec3, velocity: Vec3): GrenadeState {
  return {
    position: { ...position },
    velocity: { ...velocity },
    age: 0,
    detonated: false,
  };
}

/**
 * One fixed-timestep grenade tick against a flat floor: gravity, bounce
 * with restitution, roll friction, timed fuse. Fully deterministic — the
 * same throw lands at the same spot every run. Returns true on the tick
 * the fuse expires (caller applies radial damage).
 */
export function stepGrenade(g: GrenadeState, dt: number, opts: GrenadeOptions = {}): boolean {
  if (g.detonated) return false;
  const gravity = (opts.gravity ?? 9.8) * (opts.gravityScale ?? 1);
  const floor = (opts.groundHeight ?? 0) + GRENADE.RADIUS;

  g.velocity.y -= gravity * dt;
  g.position.x += g.velocity.x * dt;
  g.position.y += g.velocity.y * dt;
  g.position.z += g.velocity.z * dt;

  if (g.position.y <= floor && g.velocity.y < 0) {
    g.position.y = floor;
    g.velocity.y = -g.velocity.y * GRENADE.RESTITUTION;
    g.velocity.x *= GRENADE.BOUNCE_FRICTION;
    g.velocity.z *= GRENADE.BOUNCE_FRICTION;
    // Kill micro-bounces so it settles and rolls out.
    if (g.velocity.y < 0.4) g.velocity.y = 0;
  }

  g.age += dt;
  if (g.age >= GRENADE.FUSE) {
    g.detonated = true;
    return true;
  }
  return false;
}

/** Radial damage with linear falloff to zero at DAMAGE_RADIUS. */
export function grenadeDamageAt(distance: number): number {
  if (distance >= GRENADE.DAMAGE_RADIUS) return 0;
  return GRENADE.DAMAGE_MAX * (1 - distance / GRENADE.DAMAGE_RADIUS);
}
