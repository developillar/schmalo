import * as THREE from 'three';
import type { Room } from 'colyseus.js';
import type { PropKind } from '@schmalo/shared';
import { PhysicsPropEntity } from '../entities/PhysicsPropEntity';
import { PlayerEntity } from '../entities/PlayerEntity';

export class StateBinder {
  readonly players = new Map<string, PlayerEntity>();
  readonly props = new Map<string, PhysicsPropEntity>();

  constructor(
    private readonly room: Room,
    private readonly entityRoot: THREE.Group,
    private readonly localSessionId: string,
  ) {}

  bind(): void {
    this.room.state.players.onAdd((player: any, key: string) => {
      const color = key === this.localSessionId ? 0x55aa55 : player.isBot ? 0xcc5544 : 0x5588dd;
      const entity = new PlayerEntity(color);
      entity.snap(player.position.x, player.position.y, player.position.z, player.yaw);
      this.players.set(key, entity);
      if (key !== this.localSessionId) this.entityRoot.add(entity.mesh);
      player.onChange(() => {
        entity.setTarget(player.position.x, player.position.y, player.position.z, player.yaw);
        entity.mesh.visible = player.alive !== false;
      });
    });

    this.room.state.players.onRemove((_player: any, key: string) => {
      const entity = this.players.get(key);
      if (!entity) return;
      this.entityRoot.remove(entity.mesh);
      this.players.delete(key);
    });

    this.room.state.props.onAdd((prop: any, key: string) => {
      const entity = new PhysicsPropEntity(prop.kind as PropKind);
      entity.mesh.position.set(prop.position.x, prop.position.y, prop.position.z);
      entity.setTarget(prop.position.x, prop.position.y, prop.position.z);
      this.props.set(key, entity);
      this.entityRoot.add(entity.mesh);
      prop.onChange(() => entity.setTarget(prop.position.x, prop.position.y, prop.position.z));
    });

    this.room.state.props.onRemove((_prop: any, key: string) => {
      const entity = this.props.get(key);
      if (!entity) return;
      this.entityRoot.remove(entity.mesh);
      this.props.delete(key);
    });
  }

  tick(alpha = 0.2): void {
    for (const [id, p] of this.players) if (id !== this.localSessionId) p.tickInterpolation(alpha);
    for (const prop of this.props.values()) prop.tick(alpha);
  }
}
