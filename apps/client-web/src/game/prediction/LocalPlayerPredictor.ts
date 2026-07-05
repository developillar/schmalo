import * as THREE from 'three';
import { DEBUG, PLAYER } from '@schmalo/shared';
import type { InputPayload } from '@schmalo/shared';
import { stepMovement, type MoveState } from '@schmalo/sim';

/** Position here is the capsule CENTER (matches the server body). The
 * flat-floor prediction uses the exact same sim step as the headless
 * tests; the server (which additionally collides with ramps/props via
 * Rapier) corrects any divergence through reconciliation. */
const FLOOR_CENTER_Y = PLAYER.STANDING_HEIGHT * 0.5;

export class LocalPlayerPredictor {
  readonly predictedPosition = new THREE.Vector3(0, 4, 0);
  readonly authoritativePosition = new THREE.Vector3(0, 4, 0);
  readonly velocity = new THREE.Vector3();
  grounded = false;
  crouched = false;
  coyoteTimer = Infinity;
  correctionDistance = 0;

  apply(input: InputPayload): void {
    const state: MoveState = {
      position: {
        x: this.predictedPosition.x,
        y: this.predictedPosition.y,
        z: this.predictedPosition.z,
      },
      velocity: { x: this.velocity.x, y: this.velocity.y, z: this.velocity.z },
      grounded: this.grounded,
      crouched: this.crouched,
      coyoteTimer: this.coyoteTimer,
    };

    stepMovement(state, input, input.dt, { groundHeight: FLOOR_CENTER_Y });

    this.predictedPosition.set(state.position.x, state.position.y, state.position.z);
    this.velocity.set(state.velocity.x, state.velocity.y, state.velocity.z);
    this.grounded = state.grounded;
    this.crouched = state.crouched;
    this.coyoteTimer = state.coyoteTimer;
  }

  reconcile(serverPos: { x: number; y: number; z: number }): void {
    this.authoritativePosition.set(serverPos.x, serverPos.y, serverPos.z);
    this.correctionDistance = this.predictedPosition.distanceTo(this.authoritativePosition);
    if (this.correctionDistance > DEBUG.RECONCILE_EPSILON) {
      this.predictedPosition.lerp(this.authoritativePosition, 0.65);
    }
  }
}
