# Halo-Style Physics Sandbox MVP (Monorepo Prototype)

This repository contains a vertical-slice multiplayer sandbox prototype built from the PRD:

- **Client:** Three.js + TypeScript (`apps/client-web`)
- **Server:** Colyseus + Rapier + TypeScript (`apps/server-game`)
- **Shared contract:** protocol/constants/types (`packages/shared`)

## Features implemented

- Monorepo TypeScript workspace layout
- One `sandbox` Colyseus room with multiplayer join
- Server-authoritative simulation tick loop (60hz)
- Authoritative movement state synced from server
- Jump + crouch input state handling
- Graybox map and dynamic physics props (cube, crate, sphere)
- Local client-side prediction + reconciliation (sequence/ack)
- Remote player interpolation
- Debug HUD with ping, grounded, crouched, speed, correction distance, positions, player count, tick

## Quick start

### 1) Install deps

```bash
npm install
```

### 2) Run server

```bash
npm run dev:server
```

Server listens on `ws://localhost:2567`.

### 3) Run client

In another terminal:

```bash
npm run dev:client
```

Then open the Vite URL shown in terminal (usually `http://localhost:5173`).

To point client at a different server URL:

```bash
VITE_SERVER_URL=ws://localhost:2567 npm run dev:client
```

## Controls

- **Mouse**: look
- **WASD**: movement
- **Space**: jump
- **Ctrl / C**: crouch
- click canvas once to lock pointer

## Structure

```text
apps/
  client-web/
    src/main.ts
    src/game/
      scene/
      net/
      prediction/
      entities/
      ui/
  server-game/
    src/index.ts
    src/rooms/SandboxRoom.ts
    src/sim/world/
    src/sim/players/
packages/
  shared/
    src/constants.ts
    src/protocol.ts
    src/types.ts
```

## Notes

- Visuals are intentionally graybox placeholders.
- This is the movement/physics/networking foundation only (no weapons, vehicles, or game modes).
