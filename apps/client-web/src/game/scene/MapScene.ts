import * as THREE from 'three';
import { ARENA, ARENA_BLOCKS, degToRad } from '@schmalo/sim';

/** Builds the arena visuals from the same data the server builds its
 * colliders from. Returns the group so gameplay code (offline collision,
 * Forge raycasts) can raycast against it. */
export function createMapScene(root: THREE.Group): THREE.Group {
  const materials = new Map<number, THREE.MeshStandardMaterial>();
  const materialFor = (color: number): THREE.MeshStandardMaterial => {
    let m = materials.get(color);
    if (!m) {
      m = new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0.1 });
      materials.set(color, m);
    }
    return m;
  };

  const h = ARENA.HALF_SIZE;

  // Floor with a subtle grid for speed perception.
  const floor = new THREE.Mesh(
    new THREE.BoxGeometry(h * 2 + 4, 2, h * 2 + 4),
    materialFor(ARENA.FLOOR_COLOR),
  );
  floor.position.set(0, -1, 0);
  floor.receiveShadow = true;
  root.add(floor);

  const grid = new THREE.GridHelper(h * 2, 16, 0x3d434c, 0x494f59);
  grid.position.y = 0.02;
  root.add(grid);

  // Perimeter walls.
  const wallMat = materialFor(ARENA.WALL_COLOR);
  const wallGeoNS = new THREE.BoxGeometry(h * 2, ARENA.WALL_HEIGHT * 2, 2);
  const wallGeoEW = new THREE.BoxGeometry(2, ARENA.WALL_HEIGHT * 2, h * 2);
  for (const [x, z, geo] of [
    [0, -h - 1, wallGeoNS],
    [0, h + 1, wallGeoNS],
    [-h - 1, 0, wallGeoEW],
    [h + 1, 0, wallGeoEW],
  ] as const) {
    const wall = new THREE.Mesh(geo, wallMat);
    wall.position.set(x, ARENA.WALL_HEIGHT, z);
    root.add(wall);
  }

  // Every gameplay block, straight from the shared layout.
  for (const block of ARENA_BLOCKS) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(block.size[0], block.size[1], block.size[2]),
      materialFor(block.color ?? 0x757c86),
    );
    mesh.position.set(block.pos[0], block.pos[1], block.pos[2]);
    if (block.rot) {
      mesh.rotation.set(degToRad(block.rot[0]), degToRad(block.rot[1]), degToRad(block.rot[2]), 'XYZ');
    }
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
  }

  return root;
}
