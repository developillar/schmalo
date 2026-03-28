import type RAPIERModule from '@dimforge/rapier3d-compat';
import { PLAYER, WORLD } from '@schmalo/shared';
import { PlayerSnapshot, Vec3State, type SandboxRoomState } from '../world/GameState';
import type { PlayerRuntimeState } from './PlayerState';

export class PlayerManager {
  private readonly bySession = new Map<string, PlayerRuntimeState>();

  constructor(
    private readonly rapier: typeof RAPIERModule,
    private readonly world: RAPIERModule.World,
    private readonly state: SandboxRoomState,
  ) {}

  add(sessionId: string): PlayerRuntimeState {
    const spawn = WORLD.SPAWN_POSITIONS[this.bySession.size % WORLD.SPAWN_POSITIONS.length];
    const bodyDesc = this.rapier.RigidBodyDesc.dynamic().setTranslation(spawn.x, spawn.y, spawn.z).lockRotations();
    const body = this.world.createRigidBody(bodyDesc);

    const half = (PLAYER.STANDING_HEIGHT - PLAYER.RADIUS * 2) / 2;
    const collider = this.world.createCollider(
      this.rapier.ColliderDesc.capsule(half, PLAYER.RADIUS).setMass(85).setFriction(0).setRestitution(0),
      body,
    );

    const runtime: PlayerRuntimeState = {
      sessionId,
      body,
      collider,
      inputs: [],
      lastProcessedInput: 0,
      yaw: 0,
      pitch: 0,
      grounded: false,
      crouched: false,
    };

    this.bySession.set(sessionId, runtime);
    const snap = new PlayerSnapshot(sessionId);
    snap.position = new Vec3State(spawn.x, spawn.y, spawn.z);
    this.state.players.set(sessionId, snap);
    this.state.playerCount = this.bySession.size;
    return runtime;
  }

  remove(sessionId: string): void {
    const player = this.bySession.get(sessionId);
    if (!player) return;
    this.world.removeCollider(player.collider, true);
    this.world.removeRigidBody(player.body);
    this.bySession.delete(sessionId);
    this.state.players.delete(sessionId);
    this.state.playerCount = this.bySession.size;
  }

  get(sessionId: string): PlayerRuntimeState | undefined {
    return this.bySession.get(sessionId);
  }

  values(): IterableIterator<PlayerRuntimeState> {
    return this.bySession.values();
  }
}
