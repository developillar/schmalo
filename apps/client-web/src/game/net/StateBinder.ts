import * as THREE from 'three';
import { getStateCallbacks, type Room } from 'colyseus.js';
import type { PropKind } from '@schmalo/shared';
import { PhysicsPropEntity } from '../entities/PhysicsPropEntity';
import { PlayerEntity } from '../entities/PlayerEntity';
import { VehicleEntity } from '../entities/VehicleEntity';

export class StateBinder {
  readonly players = new Map<string, PlayerEntity>();
  readonly props = new Map<string, PhysicsPropEntity>();
  readonly vehicles = new Map<string, VehicleEntity>();

  constructor(
    private readonly room: Room,
    private readonly entityRoot: THREE.Group,
    private readonly localSessionId: string,
  ) {}

  bind(): void {
    const $ = getStateCallbacks(this.room as any);
    const state = this.room.state as any;

    $(state).players.onAdd((player: any, key: string) => {
      const color = key === this.localSessionId ? 0x55aa55 : player.isBot ? 0xcc5544 : 0x5588dd;
      const entity = new PlayerEntity(color);
      entity.snap(player.position.x, player.position.y, player.position.z, player.yaw);
      this.players.set(key, entity);
      if (key !== this.localSessionId) this.entityRoot.add(entity.mesh);
      $(player).onChange(() => {
        entity.setTarget(player.position.x, player.position.y, player.position.z, player.yaw);
        entity.mesh.visible = player.alive !== false;
      });
    });

    $(state).players.onRemove((_player: any, key: string) => {
      const entity = this.players.get(key);
      if (!entity) return;
      this.entityRoot.remove(entity.mesh);
      this.players.delete(key);
    });

    $(state).props.onAdd((prop: any, key: string) => {
      const entity = new PhysicsPropEntity(prop.kind as PropKind);
      entity.mesh.position.set(prop.position.x, prop.position.y, prop.position.z);
      entity.setTarget(prop.position.x, prop.position.y, prop.position.z);
      this.props.set(key, entity);
      this.entityRoot.add(entity.mesh);
      $(prop).onChange(() => entity.setTarget(prop.position.x, prop.position.y, prop.position.z));
    });

    $(state).props.onRemove((_prop: any, key: string) => {
      const entity = this.props.get(key);
      if (!entity) return;
      this.entityRoot.remove(entity.mesh);
      this.props.delete(key);
    });

    $(state).vehicles.onAdd((vehicle: any, key: string) => {
      const entity = new VehicleEntity();
      const sync = (): void =>
        entity.setTarget(
          vehicle.position,
          { x: vehicle.qx, y: vehicle.qy, z: vehicle.qz, w: vehicle.qw },
          vehicle.speed,
          vehicle.turretYaw,
          vehicle.turretPitch,
        );
      sync();
      entity.snap();
      this.vehicles.set(key, entity);
      this.entityRoot.add(entity.group);
      $(vehicle).onChange(sync);
    });

    $(state).vehicles.onRemove((_vehicle: any, key: string) => {
      const entity = this.vehicles.get(key);
      if (!entity) return;
      this.entityRoot.remove(entity.group);
      this.vehicles.delete(key);
    });
  }

  tick(alpha = 0.2, dt = 1 / 60): void {
    for (const [id, p] of this.players) if (id !== this.localSessionId) p.tickInterpolation(alpha);
    for (const prop of this.props.values()) prop.tick(alpha);
    for (const vehicle of this.vehicles.values()) vehicle.tick(dt, alpha);
  }
}
