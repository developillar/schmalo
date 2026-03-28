import * as THREE from 'three';
import type { PropKind } from '@schmalo/shared';

export class PhysicsPropEntity {
  readonly mesh: THREE.Mesh;
  target = new THREE.Vector3();

  constructor(kind: PropKind) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x8a8a8a });
    if (kind === 'sphere') this.mesh = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), mat);
    else if (kind === 'mediumCrate') this.mesh = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), mat);
    else this.mesh = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), mat);
  }

  setTarget(x: number, y: number, z: number): void {
    this.target.set(x, y, z);
  }

  tick(alpha: number): void {
    this.mesh.position.lerp(this.target, alpha);
  }
}
