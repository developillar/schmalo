import * as THREE from 'three';
import { PLAYER } from '@schmalo/shared';

/** Eye offsets from the capsule center (PRD: eye height ~1.9 m standing). */
const EYE_OFFSET_STANDING = PLAYER.EYE_HEIGHT - PLAYER.STANDING_HEIGHT * 0.5;
const EYE_OFFSET_CROUCHED = PLAYER.CROUCHED_HEIGHT * 0.9 - PLAYER.STANDING_HEIGHT * 0.5;

export class CameraController {
  /** PRD default: 90° horizontal FOV. */
  horizontalFovDeg = 90;

  constructor(private readonly camera: THREE.PerspectiveCamera) {}

  update(position: THREE.Vector3, yaw: number, pitch: number, crouched: boolean, zoomFactor = 1): void {
    const eyeOffset = crouched ? EYE_OFFSET_CROUCHED : EYE_OFFSET_STANDING;
    this.camera.position.set(position.x, position.y + eyeOffset, position.z);
    this.camera.rotation.set(pitch, yaw, 0, 'YXZ');

    // Convert horizontal FOV to three's vertical FOV for the current
    // aspect; smart-link zoom narrows it by the zoom factor.
    const halfH = Math.tan(((this.horizontalFovDeg / 2) * Math.PI) / 180) / zoomFactor;
    const vertical = 2 * Math.atan(halfH / this.camera.aspect) * (180 / Math.PI);
    if (Math.abs(this.camera.fov - vertical) > 0.01) {
      this.camera.fov = vertical;
      this.camera.updateProjectionMatrix();
    }
  }
}
