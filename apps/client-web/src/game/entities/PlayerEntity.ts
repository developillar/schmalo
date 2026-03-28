import * as THREE from 'three';

export class PlayerEntity {
  readonly mesh: THREE.Mesh;
  targetPosition = new THREE.Vector3();
  yaw = 0;

  constructor(color: number) {
    this.mesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 1.2, 8, 14), new THREE.MeshStandardMaterial({ color }));
    this.mesh.castShadow = true;
  }

  setTarget(x: number, y: number, z: number, yaw: number): void {
    this.targetPosition.set(x, y, z);
    this.yaw = yaw;
  }

  snap(x: number, y: number, z: number, yaw: number): void {
    this.mesh.position.set(x, y, z);
    this.mesh.rotation.y = yaw;
    this.setTarget(x, y, z, yaw);
  }

  tickInterpolation(alpha: number): void {
    this.mesh.position.lerp(this.targetPosition, alpha);
    this.mesh.rotation.y += (this.yaw - this.mesh.rotation.y) * alpha;
  }
}
