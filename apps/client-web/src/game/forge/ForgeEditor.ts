import * as THREE from 'three';
import {
  FORGE,
  addObject,
  createEmptyMap,
  deserializeMap,
  duplicateObject,
  removeObject,
  serializeMap,
  snapAngle,
  type ForgeMap,
  type ForgeObject,
  type ForgeObjectType,
} from '@schmalo/sim';

const PALETTE: Array<{ type: ForgeObjectType; label: string }> = [
  { type: 'block_box', label: 'Box' },
  { type: 'block_ramp', label: 'Ramp' },
  { type: 'block_wall', label: 'Wall' },
  { type: 'block_platform', label: 'Platform' },
  { type: 'spawn_point', label: 'Spawn point' },
  { type: 'weapon_spawn', label: 'Weapon spawn' },
  { type: 'vehicle_spawn', label: 'Vehicle spawn' },
  { type: 'objective', label: 'Objective' },
];

const FLY_SPEED = 9;
const FLY_SPEED_FAST = 20;

/**
 * Forge MVP (PRD §11), client-local: toggle into a floating noclip
 * monitor, spawn/grab/move/rotate/duplicate/delete palette objects,
 * fixed vs normal physics state, JSON save/load through the
 * deterministic @schmalo/sim serializer.
 */
export class ForgeEditor {
  active = false;
  readonly cameraPosition = new THREE.Vector3(0, 6, 8);

  private map: ForgeMap = createEmptyMap('untitled');
  private readonly meshes = new Map<string, THREE.Object3D>();
  private readonly root = new THREE.Group();
  private readonly raycaster = new THREE.Raycaster();
  private selectedPalette = 0;
  private heldId: string | null = null;
  private heldDistance = 6;
  private snapIndex = 1; // 45°
  private nextId = 1;
  private idPrefix = `f${Math.random().toString(36).slice(2, 7)}`;
  private readonly keys = new Set<string>();
  private readonly panel = document.createElement('div');
  private readonly falling = new Map<string, number>(); // id → fall velocity

  constructor(
    private readonly scene: THREE.Scene,
    private readonly dom: HTMLElement,
    parent: HTMLElement,
  ) {
    this.scene.add(this.root);

    window.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
      if (!this.active) return;
      this.handleKey(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    dom.addEventListener('mousedown', (e) => {
      if (!this.active || document.pointerLockElement !== dom) return;
      if (e.button === 0) this.spawnAtReticle();
      if (e.button === 2) this.toggleGrab();
    });
    window.addEventListener('wheel', (e) => {
      if (!this.active || this.heldId === null) return;
      this.heldDistance = Math.min(24, Math.max(1.5, this.heldDistance - Math.sign(e.deltaY)));
    });

    this.panel.style.cssText =
      'position:fixed;left:50%;bottom:14px;transform:translateX(-50%);padding:8px 14px;display:none;' +
      'background:#101820d9;border:1px solid #4d6a8a;border-radius:4px;font-family:monospace;' +
      'font-size:12px;color:#cfe6ff;pointer-events:none;text-align:center;line-height:1.6';
    parent.appendChild(this.panel);
  }

  toggle(): void {
    this.active = !this.active;
    this.panel.style.display = this.active ? 'block' : 'none';
    if (this.active) this.refreshPanel();
    if (!this.active && this.heldId) this.heldId = null;
  }

  /** Fly the monitor camera and update held/falling objects. */
  update(dt: number, camera: THREE.PerspectiveCamera, yaw: number, pitch: number): void {
    if (!this.active) return;

    const speed = this.keys.has('ShiftLeft') ? FLY_SPEED_FAST : FLY_SPEED;
    const forward = new THREE.Vector3(-Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch));
    const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
    const move = new THREE.Vector3();
    if (this.keys.has('KeyW')) move.add(forward);
    if (this.keys.has('KeyS')) move.sub(forward);
    if (this.keys.has('KeyD')) move.add(right);
    if (this.keys.has('KeyA')) move.sub(right);
    if (this.keys.has('Space')) move.y += 1;
    if (this.keys.has('ControlLeft')) move.y -= 1;
    if (move.lengthSq() > 0) move.normalize().multiplyScalar(speed * dt);
    this.cameraPosition.add(move);

    camera.position.copy(this.cameraPosition);
    camera.rotation.set(pitch, yaw, 0, 'YXZ');

    // Held object follows the reticle at the held distance.
    if (this.heldId) {
      const object = this.map.objects.find((o) => o.id === this.heldId);
      const mesh = this.meshes.get(this.heldId ?? '');
      if (object && mesh) {
        const target = this.cameraPosition.clone().add(forward.clone().multiplyScalar(this.heldDistance));
        object.position = { x: target.x, y: target.y, z: target.z };
        mesh.position.copy(target);
      }
    }

    // "Normal" physics objects fall until they rest on the floor plane.
    for (const [id, vel] of this.falling) {
      const object = this.map.objects.find((o) => o.id === id);
      const mesh = this.meshes.get(id);
      if (!object || !mesh || id === this.heldId) continue;
      const nextVel = vel + 9.8 * dt;
      let y = object.position.y - nextVel * dt;
      const restY = object.scale.y / 2;
      if (y <= restY) {
        y = restY;
        this.falling.delete(id);
      } else {
        this.falling.set(id, nextVel);
      }
      object.position = { ...object.position, y };
      mesh.position.y = y;
    }
  }

  private handleKey(code: string): void {
    const digit = /^Digit([1-8])$/.exec(code);
    if (digit) {
      this.selectedPalette = Number(digit[1]) - 1;
      this.refreshPanel();
      return;
    }
    switch (code) {
      case 'KeyQ':
        this.rotateHeld(-1);
        break;
      case 'KeyZ':
        this.rotateHeld(1);
        break;
      case 'KeyX':
        this.snapIndex = (this.snapIndex + 1) % FORGE.ROTATION_SNAPS_DEG.length;
        this.refreshPanel();
        break;
      case 'KeyT':
        this.togglePhysicsMode();
        break;
      case 'KeyC':
        this.duplicateHeld();
        break;
      case 'Delete':
      case 'Backspace':
        this.deleteTargeted();
        break;
      case 'KeyK':
        this.download();
        break;
      case 'KeyL':
        this.upload();
        break;
    }
  }

  private spawnAtReticle(): void {
    const camera = this.currentCamera();
    if (!camera) return;
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    const hits = this.raycaster.intersectObjects(this.scene.children, true);
    const hit = hits.find((h) => h.distance > 0.5 && h.distance < 60);
    const point = hit
      ? hit.point
      : camera.position.clone().add(camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(8));

    const entry = PALETTE[this.selectedPalette];
    const scale = defaultScale(entry.type);
    const object: ForgeObject = {
      id: `${this.idPrefix}-${this.nextId++}`,
      type: entry.type,
      position: { x: point.x, y: point.y + scale.y / 2, z: point.z },
      rotation: { x: 0, y: 0, z: 0 },
      scale,
      physics: entry.type.startsWith('block_') ? 'fixed' : 'normal',
      props:
        entry.type === 'vehicle_spawn'
          ? { vehicle: 'warthog' }
          : entry.type === 'weapon_spawn'
            ? { weapon: 'battle_rifle' }
            : entry.type === 'spawn_point'
              ? { team: 'neutral' }
              : {},
    };
    if (!addObject(this.map, object)) {
      this.flash(`Budget cap reached (${this.map.settings.objectBudget})`);
      return;
    }
    this.addMesh(object);
    this.refreshPanel();
  }

  private toggleGrab(): void {
    if (this.heldId) {
      // Place: normal-physics objects start falling on release.
      const object = this.map.objects.find((o) => o.id === this.heldId);
      if (object?.physics === 'normal') this.falling.set(object.id, 0);
      this.heldId = null;
      this.refreshPanel();
      return;
    }
    const targeted = this.objectUnderReticle();
    if (targeted) {
      this.heldId = targeted.id;
      const camera = this.currentCamera();
      if (camera) {
        this.heldDistance = camera.position.distanceTo(
          new THREE.Vector3(targeted.position.x, targeted.position.y, targeted.position.z),
        );
      }
      this.falling.delete(targeted.id);
      this.refreshPanel();
    }
  }

  private rotateHeld(direction: number): void {
    const object = this.heldOrTargeted();
    if (!object) return;
    const snapDeg = FORGE.ROTATION_SNAPS_DEG[this.snapIndex];
    const stepRad = (snapDeg * Math.PI) / 180;
    const yaw = snapAngle(object.rotation.y + direction * stepRad, snapDeg);
    object.rotation = { ...object.rotation, y: yaw };
    this.meshes.get(object.id)?.rotation.set(object.rotation.x, yaw, object.rotation.z);
  }

  private togglePhysicsMode(): void {
    const object = this.heldOrTargeted();
    if (!object) return;
    object.physics = object.physics === 'fixed' ? 'normal' : 'fixed';
    this.applyPhysicsLook(object);
    this.refreshPanel();
  }

  private duplicateHeld(): void {
    const source = this.heldOrTargeted();
    if (!source) return;
    const clone = duplicateObject(this.map, source.id, `${this.idPrefix}-${this.nextId++}`);
    if (!clone) {
      this.flash(`Budget cap reached (${this.map.settings.objectBudget})`);
      return;
    }
    clone.position = { ...clone.position, x: clone.position.x + 1, z: clone.position.z + 1 };
    this.addMesh(clone);
    this.refreshPanel();
  }

  private deleteTargeted(): void {
    const object = this.heldOrTargeted();
    if (!object) return;
    if (this.heldId === object.id) this.heldId = null;
    removeObject(this.map, object.id);
    const mesh = this.meshes.get(object.id);
    if (mesh) this.root.remove(mesh);
    this.meshes.delete(object.id);
    this.falling.delete(object.id);
    this.refreshPanel();
  }

  private download(): void {
    const json = serializeMap(this.map);
    const blob = new Blob([json], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${this.map.name}.forge.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    this.flash('Map saved');
  }

  private upload(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        this.loadMap(deserializeMap(await file.text()));
        this.flash(`Loaded ${this.map.objects.length} objects`);
      } catch (err) {
        this.flash(`Load failed: ${(err as Error).message}`);
      }
    };
    input.click();
  }

  loadMap(map: ForgeMap): void {
    for (const mesh of this.meshes.values()) this.root.remove(mesh);
    this.meshes.clear();
    this.falling.clear();
    this.heldId = null;
    this.map = map;
    for (const object of map.objects) this.addMesh(object);
    this.refreshPanel();
  }

  private addMesh(object: ForgeObject): void {
    const mesh = buildMesh(object);
    mesh.position.set(object.position.x, object.position.y, object.position.z);
    mesh.rotation.set(object.rotation.x, object.rotation.y, object.rotation.z);
    this.root.add(mesh);
    this.meshes.set(object.id, mesh);
    this.applyPhysicsLook(object);
  }

  private applyPhysicsLook(object: ForgeObject): void {
    const mesh = this.meshes.get(object.id);
    if (!mesh) return;
    mesh.traverse((child) => {
      const material = (child as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
      if (material?.isMeshStandardMaterial) {
        material.transparent = object.physics === 'normal';
        material.opacity = object.physics === 'normal' ? 0.75 : 1;
      }
    });
  }

  private heldOrTargeted(): ForgeObject | undefined {
    if (this.heldId) return this.map.objects.find((o) => o.id === this.heldId);
    return this.objectUnderReticle();
  }

  private objectUnderReticle(): ForgeObject | undefined {
    const camera = this.currentCamera();
    if (!camera) return undefined;
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    const hits = this.raycaster.intersectObjects(this.root.children, true);
    for (const hit of hits) {
      let node: THREE.Object3D | null = hit.object;
      while (node && node.parent !== this.root) node = node.parent;
      if (!node) continue;
      for (const [id, mesh] of this.meshes) {
        if (mesh === node) return this.map.objects.find((o) => o.id === id);
      }
    }
    return undefined;
  }

  private boundCamera: THREE.PerspectiveCamera | null = null;
  bindCamera(camera: THREE.PerspectiveCamera): void {
    this.boundCamera = camera;
  }

  private currentCamera(): THREE.PerspectiveCamera | null {
    return this.boundCamera;
  }

  private flash(text: string): void {
    this.refreshPanel(text);
  }

  private refreshPanel(note?: string): void {
    const entry = PALETTE[this.selectedPalette];
    const snap = FORGE.ROTATION_SNAPS_DEG[this.snapIndex];
    this.panel.innerHTML =
      `<b>FORGE</b> — ${this.map.objects.length}/${this.map.settings.objectBudget} objects` +
      `${note ? ` — <span style="color:#ffb64d">${note}</span>` : ''}<br>` +
      `[1-8] palette: <b>${entry.label}</b> · LMB spawn · RMB grab/place · wheel push/pull · ` +
      `Q/Z rotate (snap ${snap}°, X cycles) · T physics · C duplicate · Del delete · K save · L load · B exit`;
  }
}

function defaultScale(type: ForgeObjectType): { x: number; y: number; z: number } {
  switch (type) {
    case 'block_box':
      return { x: 2, y: 1, z: 2 };
    case 'block_ramp':
      return { x: 2, y: 1, z: 3 };
    case 'block_wall':
      return { x: 4, y: 3, z: 0.3 };
    case 'block_platform':
      return { x: 4, y: 0.3, z: 4 };
    case 'vehicle_spawn':
      return { x: 3, y: 1.2, z: 1.6 };
    default:
      return { x: 0.6, y: 0.6, z: 0.6 };
  }
}

function buildMesh(object: ForgeObject): THREE.Object3D {
  const s = object.scale;
  const colorByType: Record<ForgeObjectType, number> = {
    block_box: 0x8a93a0,
    block_ramp: 0x7f8ba0,
    block_wall: 0x99a3b3,
    block_platform: 0x76808f,
    spawn_point: 0x64d97b,
    weapon_spawn: 0x59c8e0,
    vehicle_spawn: 0xe0a659,
    objective: 0xe6d75a,
  };
  const material = new THREE.MeshStandardMaterial({ color: colorByType[object.type] });

  if (object.type === 'block_ramp') {
    // Wedge: triangular prism sloping up along +Z.
    const geometry = new THREE.BufferGeometry();
    const w = s.x / 2;
    const h = s.y;
    const d = s.z / 2;
    // prettier-ignore
    const vertices = new Float32Array([
      // bottom
      -w, 0, -d,  w, 0, -d,  w, 0, d,
      -w, 0, -d,  w, 0, d,  -w, 0, d,
      // slope
      -w, 0, -d,  -w, h, d,  w, h, d,
      -w, 0, -d,  w, h, d,  w, 0, -d,
      // back (tall end)
      -w, 0, d,  w, 0, d,  w, h, d,
      -w, 0, d,  w, h, d,  -w, h, d,
      // sides
      -w, 0, -d,  -w, 0, d,  -w, h, d,
      w, 0, -d,  w, h, d,  w, 0, d,
    ]);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y -= s.y / 2; // geometry sits on its base
    const group = new THREE.Group();
    group.add(mesh);
    return group;
  }

  if (object.type === 'spawn_point') {
    const group = new THREE.Group();
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.08, 20), material);
    const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.5, 12), material.clone());
    arrow.position.set(0, 0.35, -0.25);
    arrow.rotation.x = -Math.PI / 2;
    group.add(pad, arrow);
    return group;
  }

  if (object.type === 'objective') {
    const group = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.6, 8), material);
    pole.position.y = 0.3;
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.4), material.clone());
    flag.position.set(0.35, 0.85, 0);
    flag.material.side = THREE.DoubleSide;
    group.add(pole, flag);
    return group;
  }

  return new THREE.Mesh(new THREE.BoxGeometry(s.x, s.y, s.z), material);
}
