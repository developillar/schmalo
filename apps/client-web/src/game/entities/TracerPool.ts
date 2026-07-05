import * as THREE from 'three';
import type { Vec3 } from '@schmalo/shared';

interface Tracer {
  line: THREE.Line;
  ttl: number;
}

/** Short-lived hitscan tracer lines for shot feedback. */
export class TracerPool {
  private readonly tracers: Tracer[] = [];
  private readonly material = new THREE.LineBasicMaterial({
    color: 0xffe9a8,
    transparent: true,
    opacity: 0.9,
  });

  constructor(private readonly root: THREE.Group) {}

  spawn(origin: Vec3, end: Vec3): void {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(origin.x, origin.y, origin.z),
      new THREE.Vector3(end.x, end.y, end.z),
    ]);
    const line = new THREE.Line(geometry, this.material.clone());
    this.root.add(line);
    this.tracers.push({ line, ttl: 0.08 });
  }

  tick(dt: number): void {
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const tracer = this.tracers[i];
      tracer.ttl -= dt;
      (tracer.line.material as THREE.LineBasicMaterial).opacity = Math.max(0, tracer.ttl / 0.08);
      if (tracer.ttl <= 0) {
        this.root.remove(tracer.line);
        tracer.line.geometry.dispose();
        (tracer.line.material as THREE.Material).dispose();
        this.tracers.splice(i, 1);
      }
    }
  }
}
