import type RAPIER from '@dimforge/rapier3d-compat';
import type { InputPayload } from '@schmalo/shared';

export interface PlayerRuntimeState {
  sessionId: string;
  body: RAPIER.RigidBody;
  collider: RAPIER.Collider;
  inputs: InputPayload[];
  lastProcessedInput: number;
  yaw: number;
  pitch: number;
  grounded: boolean;
  crouched: boolean;
}
