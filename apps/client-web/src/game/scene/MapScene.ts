import * as THREE from 'three';

export function createMapScene(root: THREE.Group): void {
  const gray = new THREE.MeshStandardMaterial({ color: 0x7a7a7a });
  const dark = new THREE.MeshStandardMaterial({ color: 0x525252 });

  const floor = new THREE.Mesh(new THREE.BoxGeometry(60, 2, 60), gray);
  floor.position.set(0, -1, 0);
  root.add(floor);

  const ramp = new THREE.Mesh(new THREE.BoxGeometry(8, 1, 8), dark);
  ramp.position.set(9, 2, -10);
  ramp.rotation.x = -0.4;
  root.add(ramp);

  const platform1 = new THREE.Mesh(new THREE.BoxGeometry(16, 1.6, 4), gray);
  platform1.position.set(0, 0.8, 12);
  root.add(platform1);
  const platform2 = new THREE.Mesh(new THREE.BoxGeometry(16, 1.6, 4), gray);
  platform2.position.set(0, 2.4, 16);
  root.add(platform2);

  const tunnelBase = new THREE.Mesh(new THREE.BoxGeometry(10, 2, 6), gray);
  tunnelBase.position.set(-14, 1, -12);
  root.add(tunnelBase);
  const tunnelCeil = new THREE.Mesh(new THREE.BoxGeometry(10, 0.8, 6), dark);
  tunnelCeil.position.set(-14, 2.6, -12);
  root.add(tunnelCeil);

  const pit = new THREE.Mesh(new THREE.BoxGeometry(8, 8, 8), new THREE.MeshStandardMaterial({ color: 0x1f1f1f }));
  pit.position.set(18, -4, 0);
  root.add(pit);
}
