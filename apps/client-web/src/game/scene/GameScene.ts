import * as THREE from 'three';
import { createMapScene } from './MapScene';

export class GameScene {
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
  readonly renderer = new THREE.WebGLRenderer({ antialias: true });
  readonly mapRoot = new THREE.Group();
  readonly entityRoot = new THREE.Group();

  constructor(container: HTMLElement) {
    this.scene.background = new THREE.Color(0x11151c);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1));
    const dir = new THREE.DirectionalLight(0xffffff, 1.1);
    dir.position.set(3, 8, 5);
    this.scene.add(dir);

    this.scene.add(this.mapRoot);
    this.scene.add(this.entityRoot);
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
