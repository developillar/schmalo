import * as THREE from 'three';
import { PLAYER } from '@schmalo/shared';

export class CameraController {
  constructor(private readonly camera: THREE.PerspectiveCamera) {}

  update(position: THREE.Vector3, yaw: number, pitch: number, crouched: boolean): void {
    const eyeHeight = (crouched ? PLAYER.CROUCHED_HEIGHT : PLAYER.STANDING_HEIGHT) * 0.92;
    this.camera.position.set(position.x, position.y + eyeHeight * 0.5, position.z);
    this.camera.rotation.set(pitch, yaw, 0, 'YXZ');
  }
}
