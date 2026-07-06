import * as THREE from 'three';
import { createMapScene } from './MapScene';

export class GameScene {
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
  readonly renderer = new THREE.WebGLRenderer({ antialias: true });
  readonly mapRoot = new THREE.Group();
  readonly entityRoot = new THREE.Group();

  constructor(container: HTMLElement) {
    this.scene.background = new THREE.Color(0x141a24);
    this.scene.fog = new THREE.Fog(0x141a24, 55, 110);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    this.scene.add(new THREE.HemisphereLight(0xbdd3ec, 0x4a505a, 1.25));
    const dir = new THREE.DirectionalLight(0xfff2dd, 1.5);
    dir.position.set(18, 30, 12);
    this.scene.add(dir);
    const fill = new THREE.DirectionalLight(0x9db8d8, 0.45);
    fill.position.set(-14, 18, -20);
    this.scene.add(fill);

    this.scene.add(this.mapRoot);
    this.scene.add(this.entityRoot);
    // Camera must be in the graph so camera-parented objects (the
    // first-person weapon) render.
    this.scene.add(this.camera);
    createMapScene(this.mapRoot);

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}
