# Blam.js — Halo-3-Style Arena Sandbox (Monorepo Prototype)

A browser arena-FPS vertical slice built from [PRD.md](./PRD.md): precise
no-sprint movement, a shield-gated time-to-kill, a burst rifle with the
classic 4-shot, and a Forge editor — all validated headless-first.

- **Sim core:** pure deterministic game modules + acceptance tests (`packages/sim`)
- **Client:** Three.js + TypeScript (`apps/client-web`)
- **Server:** Colyseus + Rapier + TypeScript, server-authoritative (`apps/server-game`)
- **Shared contract:** protocol/constants/types (`packages/shared`)

## What's implemented

### `packages/sim` — the PRD's headless-first core (§15)
Pure, fixed-timestep (60 Hz), frame-rate-independent modules with **41
acceptance tests** covering every testable PRD bullet:

- **Movement (§5):** jump apex 1.1 m ± 0.03 @ 0.47 s ± 0.02, 100% momentum
  retention on jump, air-control speed cap (no bunnyhop), coyote time
  (80 ms), crouch, **no sprint**, Forge gravity scaling
- **Damage model (§6):** shield 100 / health 45, 5.0 s recharge delay +
  2.0 s refill, delay reset on damage, **headshot instakill only when
  shields are down**, health never regenerates, front/back melee rules,
  overshield to 300 that decays only via damage
- **Battle Rifle (§7):** 3-round burst over 0.075 s, 0.25 s inter-burst
  rate limit, spread bloom 0.4°→1.0°, mag 36 / reserve 108,
  tactical (1.8 s) vs empty (2.2 s) reloads, ammo invariants, 2× zoom with
  descope-on-damage, range falloff flag (4-shot → 5-burst past 30 m),
  **exact 4-shot kill**
- **Grenades (§5.4/§9.2):** deterministic ballistic sim (identical landing
  across 100 runs), 2.5 s fuse, restitution 0.3, linear radial falloff
- **Warthog logic (§8):** splatter instakill at ≥ 7 m/s (damage +
  knockback below), chaingun spin-up / overheat lock-until-cool /
  spread ramp, 3-seat occupancy invariants
- **Forge serializer (§11):** stable JSON save/load with
  `load(save(map))` deep-equal round-trip, validation (types, physics
  mode, gravity scale, vectors, versions), flat budget cap, rotation snap

Run them: `npm --workspace @schmalo/sim run test`

### In-game (client + server)
- Server-authoritative movement driven by the **same sim math** as the
  headless tests (velocity-verlet gravity → in-engine apex matches),
  client prediction + reconciliation, remote interpolation
- **Combat:** hitscan BR with server-side spread (seeded, reproducible),
  head/body hit zones, shields/health/recharge, kill → 5 s respawn,
  hitmarkers (shield/flesh/headshot/kill), kill feed, tracers, 2× zoom
  (FOV + vignette), descope on damage, melee with back-smack instakill
- **Training bot** that strafes, dies, and respawns through the same
  authoritative pipeline
- **HUD:** segmented shield bar, health pips, ammo/reload, reticle,
  K/D, respawn overlay
- **Forge MVP (client-local):** press **B** — noclip monitor fly-cam,
  8-item palette (blocks/ramp/wall/platform, player/weapon/vehicle
  spawns, objective), spawn/grab/move/rotate(snapped)/duplicate/delete,
  fixed vs normal physics state, budget cap, **K/L save/load** of the
  deterministic JSON format

### Not yet wired in-game (modules ready & tested)
- Warthog driving (raycast-vehicle integration), grenade throwing,
  overshield pickups, loading Forge maps into the server world

## Play it

**Live (GitHub Pages):** https://developillar.github.io/schmalo/ — static
hosting has no game server, so the client runs **offline single-player
mode**: the same `@schmalo/sim` modules that power the authoritative
server run locally at a fixed 60 Hz (identical movement feel, BR timing,
and shield/headshot rules) against the strafing training bot, and the
Forge editor works fully. Append `?server=wss://your-host` to connect
the deployed client to a hosted Colyseus server instead, or `?offline=1`
anywhere to force offline mode. Deploys run from
`.github/workflows/deploy-pages.yml` (tests must pass first).

## Quick start (full multiplayer, local)

```bash
npm install
npm run dev:server   # ws://localhost:2567
npm run dev:client   # Vite, usually http://localhost:5173
```

Point the client elsewhere with `VITE_SERVER_URL=ws://host:2567`.

## Controls

| Input | Action |
|---|---|
| Mouse | look (click canvas to lock pointer) |
| WASD / Space / Ctrl·C | move / jump / crouch |
| LMB | fire (3-round burst) |
| RMB | 2× zoom toggle |
| R | reload |
| F / V | melee |
| B | toggle Forge editor (in-editor help shown on the bottom bar) |

## Testing

```bash
npm --workspace @schmalo/sim run test   # 41 headless acceptance tests
npm run typecheck                       # all workspaces
```

The render layer stays a thin consumer of `@schmalo/sim` — combat and
physics math never needs a canvas to be verified (PRD §15).

## Structure

```text
packages/
  sim/          pure deterministic game modules + acceptance tests
    src/        constants, movement, vitals, battleRifle, grenade,
                warthog, forge
    test/       PRD acceptance criteria as node:test suites
  shared/       protocol, network constants (derives from sim)
apps/
  server-game/  Colyseus rooms, Rapier world, player/combat/bot systems
  client-web/   Three.js scene, prediction, HUD, Forge editor
```
