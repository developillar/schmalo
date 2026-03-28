import { Room, type Client } from '@colyseus/core';
import { MSG, NET } from '@schmalo/shared';
import type { InputPayload } from '@schmalo/shared';
import { PlayerManager } from '../sim/players/PlayerManager';
import { PlayerSystem } from '../sim/players/PlayerSystem';
import { SandboxRoomState } from '../sim/world/GameState';
import { PhysicsWorld } from '../sim/world/PhysicsWorld';

export class SandboxRoom extends Room<SandboxRoomState> {
  maxClients = 8;
  private physics!: PhysicsWorld;
  private players!: PlayerManager;
  private playerSystem!: PlayerSystem;

  override async onCreate(): Promise<void> {
    this.setState(new SandboxRoomState());
    this.physics = await PhysicsWorld.create(this.state);
    this.players = new PlayerManager(this.physics.rapier, this.physics.world, this.state);
    this.playerSystem = new PlayerSystem(this.players, this.state);

    this.onMessage(MSG.INPUT, (client, payload: InputPayload) => {
      this.playerSystem.enqueueInput(client.sessionId, payload);
    });

    this.onMessage(MSG.PING, (client, sentAt: number) => {
      client.send(MSG.PONG, sentAt);
    });

    this.setSimulationInterval((deltaMs) => {
      const dt = deltaMs / 1000;
      this.playerSystem.step(dt);
      this.physics.step();
      this.state.room.tick += 1;
      this.state.room.simRate = NET.TICK_RATE;
    }, 1000 / NET.TICK_RATE);
  }

  override onJoin(client: Client): void {
    this.players.add(client.sessionId);
  }

  override onLeave(client: Client): void {
    this.players.remove(client.sessionId);
  }
}
