import type { EntityId, PropKind, Vec3 } from './types';

export const MSG = {
  INPUT: 'input',
  PING: 'ping',
  PONG: 'pong',
  /** Server → client combat feedback events. */
  HIT_CONFIRM: 'hitConfirm',
  KILL_FEED: 'killFeed',
  SHOT_FIRED: 'shotFired',
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
  /** Edge-triggered: pressed this tick. */
  fire: boolean;
  reload: boolean;
  zoomToggle: boolean;
  melee: boolean;
  /** Edge-triggered: enter/exit vehicle (E). */
  use: boolean;
}

export interface AckPayload {
  ackSeq: number;
}

/** Server → shooter: what the last round(s) hit, for hitmarkers. */
export interface HitConfirmPayload {
  kind: 'shield' | 'flesh' | 'headshot' | 'kill';
}

export interface KillFeedPayload {
  killer: string;
  victim: string;
  headshot: boolean;
}

/** Server → all: a shot happened (for tracers/audio on remote clients). */
export interface ShotFiredPayload {
  shooter: string;
  origin: Vec3;
  end: Vec3;
}

export interface DynamicPropSnapshot {
  id: EntityId;
  kind: PropKind;
  position: Vec3;
  rotation: Vec3;
}
