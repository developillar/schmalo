import * as THREE from 'three';
import { DEBUG, PLAYER } from '@schmalo/shared';
import type { InputPayload } from '@schmalo/shared';

export class LocalPlayerPredictor {
  readonly predictedPosition = new THREE.Vector3(0, 4, 0);
  readonly authoritativePosition = new THREE.Vector3(0, 4, 0);
  readonly velocity = new THREE.Vector3();
  grounded = false;
  crouched = false;
  correctionDistance = 0;

  apply(input: InputPayload): void {
    const dt = input.dt;
    const f = new THREE.Vector3(Math.sin(input.yaw), 0, Math.cos(input.yaw));
    const r = new THREE.Vector3(Math.cos(input.yaw), 0, -Math.sin(input.yaw));
    const wish = f.multiplyScalar(input.moveZ).add(r.multiplyScalar(input.moveX));
    if (wish.lengthSq() > 0) wish.normalize();

    const speed = PLAYER.MOVE_SPEED * (input.crouch ? PLAYER.CROUCH_SPEED_MULTIPLIER : 1);
    const accel = this.grounded ? PLAYER.GROUND_ACCEL : PLAYER.AIR_ACCEL;
    const target = wish.multiplyScalar(speed);

    this.velocity.x += (target.x - this.velocity.x) * Math.min(1, (accel * dt) / speed);
    this.velocity.z += (target.z - this.velocity.z) * Math.min(1, (accel * dt) / speed);

    if (input.jump && this.grounded) {
      this.velocity.y = PLAYER.JUMP_VELOCITY;
      this.grounded = false;
    }
    this.velocity.y -= PLAYER.GRAVITY * dt;
    this.predictedPosition.addScaledVector(this.velocity, dt);

    if (this.predictedPosition.y <= PLAYER.STANDING_HEIGHT * 0.5) {
      this.predictedPosition.y = PLAYER.STANDING_HEIGHT * 0.5;
      this.velocity.y = 0;
      this.grounded = true;
    }
    this.crouched = input.crouch;
  }

  reconcile(serverPos: { x: number; y: number; z: number }): void {
    this.authoritativePosition.set(serverPos.x, serverPos.y, serverPos.z);
    this.correctionDistance = this.predictedPosition.distanceTo(this.authoritativePosition);
    if (this.correctionDistance > DEBUG.RECONCILE_EPSILON) {
      this.predictedPosition.lerp(this.authoritativePosition, 0.65);
    }
  }
}
