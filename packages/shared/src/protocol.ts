import type { EntityId, PropKind, Vec3 } from './types';

export const MSG = {
  INPUT: 'input',
  PING: 'ping',
  PONG: 'pong',
} as const;

export interface InputPayload {
  seq: number;
  dt: number;
  moveX: number;
  moveZ: number;
  yaw: number;
  pitch: number;
  jump: boolean;
  crouch: boolean;
}

export interface AckPayload {
  ackSeq: number;
}

export interface DynamicPropSnapshot {
  id: EntityId;
  kind: PropKind;
  position: Vec3;
  rotation: Vec3;
}
