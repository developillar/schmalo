import type RAPIER from '@dimforge/rapier3d-compat';
import type { InputPayload } from '@schmalo/shared';
import type { BattleRifle, Vitals } from '@schmalo/sim';

export interface PlayerRuntimeState {
  sessionId: string;
  isBot: boolean;
  body: RAPIER.RigidBody;
  collider: RAPIER.Collider;
  inputs: InputPayload[];
  lastProcessedInput: number;
  yaw: number;
  pitch: number;
  grounded: boolean;
  crouched: boolean;
  /** Vertical velocity, integrated manually (velocity-verlet against the
   * Rapier body) so the in-game jump arc matches the sim module exactly. */
  velY: number;
  coyoteTimer: number;
  prevJumpHeld: boolean;

  vitals: Vitals;
  rifle: BattleRifle;
  respawnTimer: number;
  meleeCooldown: number;
  kills: number;
  deaths: number;
}
