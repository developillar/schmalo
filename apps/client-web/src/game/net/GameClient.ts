import { Client, Room } from 'colyseus.js';
import { MSG, WORLD, type InputPayload } from '@schmalo/shared';

export class GameClient {
  private readonly client: Client;
  room?: Room;
  pingMs = 0;

  constructor(serverUrl: string) {
    this.client = new Client(serverUrl);
  }

  async connect(): Promise<Room> {
    this.room = await this.client.joinOrCreate(WORLD.ROOM_NAME);
    this.room.onMessage(MSG.PONG, (sentAt: number) => {
      this.pingMs = performance.now() - sentAt;
    });
    return this.room;
  }

  sendInput(input: InputPayload): void {
    this.room?.send(MSG.INPUT, input);
  }

  sendPing(): void {
    this.room?.send(MSG.PING, performance.now());
  }
}
