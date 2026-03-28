# PRD: Halo-Style Physics Sandbox FPS MVP
Version: 0.1
Target: Web prototype
Primary stack: Three.js + Colyseus + Rapier + TypeScript monorepo

## 1. Product Goal

Build a multiplayer-first FPS sandbox MVP that captures the **movement and physics feel** of a Halo-style arena game at the most basic level.

This initial MVP should only include:
- a controllable player capsule/model
- first-person camera
- movement
- jump
- crouch
- gravity
- collision with map geometry
- movable physics objects that can be pushed, bumped, and stacked
- server-authoritative multiplayer foundation
- local client prediction for the local player
- remote player interpolation
- a simple debug HUD

This MVP is **not** a full game. It is a **movement and physics testbed** that proves the technical foundation before adding weapons, equipment, vehicles, or game modes.

The purpose is to create a stable base for later milestones:
1. movement sandbox
2. throwable / impulse / weapons
3. combat loop
4. game modes like Slayer and Infection
5. forge-like editing
6. vehicles

---

## 2. Core Design Pillars

1. **Movement feels responsive**
   - local player should feel immediate
   - jump and crouch should feel crisp
   - the player should not feel floaty in a bad way or sluggish in turning/motion

2. **Physics feels playful**
   - movable objects should react clearly to player contact
   - objects should be easy to read and fun to push around
   - collisions should be stable and not jitter excessively

3. **Server owns truth**
   - the server is authoritative for movement and physics state
   - the client predicts only for responsiveness
   - all final positions come from the server

4. **Graybox first**
   - no polished art
   - use primitive shapes and simple materials
   - prioritize feel, architecture, and debugging

---

## 3. MVP Scope

### In Scope
- browser-based client using Three.js
- Node.js multiplayer server using Colyseus
- Rapier physics on the server
- optional lightweight client-side local prediction logic using shared movement constants
- one joinable sandbox room
- first-person player controller
- WASD movement
- mouse look
- jump
- crouch
- gravity
- collision against static level geometry
- several dynamic physics cubes / barrels / balls
- multiple connected players visible in same room
- remote player interpolation
- local prediction + reconciliation
- debug overlay for movement and networking

### Out of Scope
- weapons
- grenades
- melee
- health/shields
- death/respawn
- scoring
- teams
- Slayer
- Infection
- vehicles
- equipment
- forge mode
- matchmaking/lobbies
- persistence/accounts
- cosmetics/animations beyond simple placeholders
- advanced anti-cheat
- mobile support

---

## 4. Target Player Experience

A player opens the web app, joins a sandbox room, spawns into a graybox test map, and can:
- look around in first person
- walk, strafe, jump, crouch
- collide with ramps, floors, and walls
- run into movable objects and push them
- see other connected players moving in the same space
- feel that their own movement is immediate and responsive
- use a debug HUD to inspect speed, grounded state, ping, and prediction correction

The MVP is successful if it already feels like a believable base for a Halo-inspired sandbox shooter, even with no weapons.

---

## 5. Technical Architecture

## 5.1 Monorepo Structure

/apps
  /client-web
    main.ts
    game/
      scene/
      net/
      prediction/
      entities/
      ui/
  /server-game
    index.ts
    rooms/
      SandboxRoom.ts
    sim/
      world/
      players/
  /packages
    /shared
      protocol.ts
      constants.ts
      types.ts

## 5.2 Responsibilities

### Client (Three.js)
Owns:
- rendering
- first-person camera
- input collection
- local prediction
- interpolation of remote entities
- debug HUD

Does NOT own final truth for:
- movement
- collisions
- physics object positions

### Server (Colyseus + Rapier)
Owns:
- room lifecycle
- player spawn/despawn
- authoritative movement
- gravity/jump/crouch state
- dynamic rigid body simulation
- collision resolution
- final synced transforms

### Shared Package
Owns:
- message payloads
- constants
- shared data types
- movement tuning values

---

## 6. Gameplay / Feel Requirements

## 6.1 Controls
- Mouse = look
- W/S = forward/back
- A/D = strafe left/right
- Space = jump
- Ctrl or C = crouch
- Shift is unused for now unless needed for debug movement toggles

## 6.2 Movement Requirements
- first-person movement
- grounded movement should feel responsive and slightly weighty
- air control should exist but be weaker than grounded control
- jump should be consistent and easy to test repeatedly
- crouch should reduce player height/capsule cleanly
- crouching under low ceilings should work
- standing back up should fail if blocked by geometry
- player should traverse ramps and simple elevation changes cleanly
- no sliding around excessively while idle
- no sticky wall behavior

## 6.3 Physics Object Requirements
- include at least 3 kinds of movable objects using simple primitives:
  - small cube
  - medium crate
  - spherical object
- player collision should be able to move lighter objects
- heavier objects should feel harder to push
- objects should collide with each other and map geometry
- objects should settle stably and not jitter constantly
- movable objects should be server-authoritative
- remote players should see roughly consistent object motion

---

## 7. Map Requirements

Create one simple graybox test map with:
- flat spawn area
- several ramps
- a low ceiling crouch tunnel
- a few platforms of varying heights
- a pit or drop for gravity testing
- a corner/box area for pushing physics objects
- enough open space for at least 4 players to move around comfortably

Use primitive geometry only:
- floor planes / boxes
- walls
- ramps
- platforms
- simple collision meshes matching visuals closely

Do not spend time on art polish.

---

## 8. Networking Requirements

## 8.1 Multiplayer Model
- use Colyseus rooms
- one room type called `sandbox`
- support at least 4 simultaneous players in one room for testing
- room state should include:
  - players
  - dynamic physics object transforms
  - room time / tick info as needed

## 8.2 Authoritative Simulation
- server runs fixed-timestep simulation
- server processes player input
- server updates player kinematic/controller movement
- server steps Rapier world
- server writes authoritative transforms to synchronized room state

## 8.3 Client Prediction
- local client predicts its own movement immediately after input
- inputs are sent with sequence numbers
- when authoritative state arrives, client reconciles local player state
- unacknowledged inputs are replayed

## 8.4 Remote Interpolation
- non-local players should not snap every update
- remote players interpolate toward latest received transform
- dynamic objects may also use interpolation/smoothing if needed

---

## 9. Physics Requirements

## 9.1 Server Physics World
Use Rapier on the server as the main physics/simulation source.

Include:
- static colliders for level
- player controller or capsule-based movement solution
- dynamic rigid bodies for movable props

## 9.2 Player Physics Model
Preferred approach:
- treat player as a custom movement controller or controlled capsule
- gravity applies when airborne
- grounded checks are explicit
- crouch changes collider/capsule height safely
- jumping only works when grounded
- player is not a loose uncontrolled physics object

Important:
- movement should feel intentional and game-like, not like a generic slippery rigid body controller

## 9.3 Object Physics
- dynamic cubes and spheres use Rapier rigid bodies
- objects have different masses
- some damping is allowed to reduce endless sliding
- avoid over-damping so interactions still feel readable

---

## 10. Visual / Audio Requirements

### Visuals
- graybox only
- use simple colors/materials
- player models can be simple capsules or box placeholders
- local player body does not need to be visible in first person
- remote players should have visible placeholder bodies

### Audio
- optional for MVP
- footsteps/jump/land sounds are not required
- no positional audio required yet

---

## 11. Debug HUD Requirements

Add a simple on-screen debug overlay showing:
- ping
- local predicted position
- server authoritative position
- correction distance
- player velocity magnitude
- grounded state
- crouched state
- current room player count
- current tick/update rate if available

This is required for MVP.

---

## 12. Shared Constants

Create a shared constants file with movement tuning values. Start with these defaults and make them easy to tweak:

- tick rate: 60
- player radius: 0.35
- standing height: 2.13
- crouched height: ~1.4 to 1.5
- move speed: 7.6 m/s
- air control: reduced compared to ground
- gravity: 6.0 m/s^2
- jump velocity: ~4.14 m/s
- ground accel/decel values should be tunable constants
- object masses should be tunable per prefab

All gameplay feel values must be centralized, not hardcoded in random files.

---

## 13. File-by-File Expectations

## 13.1 Shared

### `/packages/shared/types.ts`
Contains:
- `Vec3`
- `EntityId`
- basic shared enums/types

### `/packages/shared/constants.ts`
Contains:
- movement tuning
- player dimensions
- tick rate
- debug flags

### `/packages/shared/protocol.ts`
Contains:
- message names
- `InputPayload`
- any client/server event payload types

---

## 13.2 Server

### `/apps/server-game/index.ts`
- boot Colyseus server
- register `sandbox` room
- listen on configured port

### `/apps/server-game/rooms/SandboxRoom.ts`
- create room state
- spawn/despawn players
- receive input messages
- run fixed simulation loop
- sync state to clients

### `/apps/server-game/sim/world/GameState.ts`
- Colyseus room state schema
- players map
- dynamic objects map

### `/apps/server-game/sim/world/PhysicsWorld.ts`
- create Rapier world
- static map colliders
- dynamic object setup
- world stepping

### `/apps/server-game/sim/players/PlayerState.ts`
- runtime player data
- last processed input sequence
- grounded/crouched flags
- velocity

### `/apps/server-game/sim/players/PlayerManager.ts`
- spawn players
- remove players
- access player runtime data

### `/apps/server-game/sim/players/PlayerSystem.ts`
- process inputs
- apply movement
- apply gravity/jump
- perform crouch/stand logic
- write results back to synced state

---

## 13.3 Client

### `/apps/client-web/main.ts`
- bootstrap app
- create renderer, network client, scene, ui
- start frame loop

### `/apps/client-web/game/net/GameClient.ts`
- connect to Colyseus
- join room
- send input messages
- subscribe to state changes

### `/apps/client-web/game/net/StateBinder.ts`
- create/destroy client entities from synced state
- update interpolation targets

### `/apps/client-web/game/scene/GameScene.ts`
- Three.js scene setup
- renderer
- camera
- root groups
- frame render call

### `/apps/client-web/game/scene/MapScene.ts`
- create graybox map visuals matching server map layout

### `/apps/client-web/game/scene/CameraController.ts`
- first-person look controls
- attach camera to local player predicted transform

### `/apps/client-web/game/prediction/InputCollector.ts`
- gather keyboard/mouse input
- produce `InputPayload` every frame/tick

### `/apps/client-web/game/prediction/PredictionBuffer.ts`
- store sent inputs with sequence numbers
- track unacknowledged inputs

### `/apps/client-web/game/prediction/LocalPlayerPredictor.ts`
- apply local movement immediately
- reconcile to authoritative state

### `/apps/client-web/game/entities/PlayerEntity.ts`
- render remote/local placeholder players
- support interpolation target updates

### `/apps/client-web/game/entities/PhysicsPropEntity.ts`
- render dynamic cubes/spheres/crates

### `/apps/client-web/game/ui/DebugPanel.ts`
- render HUD/debug text

---

## 14. Development Order

Implement in this order:

### Phase 1: Shared contract
1. `types.ts`
2. `constants.ts`
3. `protocol.ts`

### Phase 2: Minimal server
4. server `index.ts`
5. `GameState.ts`
6. `SandboxRoom.ts`

Goal:
- a client can join a room
- the server creates a player entry

### Phase 3: Minimal client render
7. client `main.ts`
8. `GameClient.ts`
9. `GameScene.ts`
10. `MapScene.ts`
11. `PlayerEntity.ts`
12. `StateBinder.ts`

Goal:
- connect to room
- render placeholder players

### Phase 4: Authoritative movement
13. `PhysicsWorld.ts`
14. `PlayerState.ts`
15. `PlayerManager.ts`
16. `PlayerSystem.ts`
17. `InputCollector.ts`

Goal:
- local and remote players can move, jump, crouch on server authority

### Phase 5: Prediction and camera
18. `PredictionBuffer.ts`
19. `LocalPlayerPredictor.ts`
20. `CameraController.ts`

Goal:
- local movement feels immediate
- remote players interpolate

### Phase 6: Movable objects
21. add dynamic props to `PhysicsWorld.ts`
22. create `PhysicsPropEntity.ts`
23. expand `StateBinder.ts`
24. expand `DebugPanel.ts`

Goal:
- dynamic objects exist, move, collide, and replicate

### Phase 7: Polish/debug
25. tune constants
26. improve crouch tunnel behavior
27. improve reconciliation and smoothing
28. confirm 2–4 player stability

---

## 15. Acceptance Criteria

The MVP is complete when all of the following are true:

1. A player can open the client and join a Colyseus room.
2. At least 2 players can connect to the same room.
3. Players can move using WASD and mouse look.
4. Players can jump.
5. Players can crouch.
6. Players can move through a low crouch tunnel and stand back up only when clearance exists.
7. The map has stable collision for ramps, floors, and walls.
8. The room contains multiple dynamic movable objects.
9. Players can push lighter objects and collide with heavier ones.
10. Remote players are visible and move smoothly.
11. Local player movement feels immediate due to prediction.
12. The debug HUD displays networking and movement info.
13. There are no major jitter, teleport, or fall-through-floor issues during normal play.

---

## 16. Non-Goals / Guardrails

Do NOT add the following in this MVP:
- weapons
- damage
- health
- teams
- score
- death
- respawn
- Infection
- Slayer
- vehicles
- forge editor
- advanced character art
- advanced menus
- inventory systems

Stay disciplined. The point is to prove:
- movement feel
- server/client architecture
- replicated physics sandbox basics

---

## 17. Coding Requirements

- use TypeScript everywhere
- keep code modular and readable
- avoid large god files where possible
- centralize constants
- use fixed timestep on server
- use clear comments only where helpful
- prefer simple placeholder visuals over premature abstraction
- keep the first working version small before refactoring

---

## 18. Deliverables

The implementation should produce:
1. a running Colyseus server
2. a running web client
3. one graybox map
4. multiplayer movement with jump/crouch
5. replicated dynamic objects
6. a debug HUD
7. clear README instructions to run both client and server locally

---

## 19. After MVP

Only after this MVP is stable, the next recommended milestone is:

### Milestone 2: Sandbox Combat Foundation
Add:
- grenade-like throwable physics projectile
- explosion impulse
- simple hitscan or projectile weapon
- health/damage
- basic respawn

After that:
### Milestone 3
- Slayer

After that:
### Milestone 4
- Infection
