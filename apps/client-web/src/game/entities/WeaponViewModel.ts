import * as THREE from 'three';

const GUNMETAL = 0x2e3338;
const DARK = 0x1d2126;
const ACCENT = 0x4a5568;

/**
 * Procedural first-person burst-rifle view model, parented to the
 * camera: walk bob, fire kick, muzzle flash, reload dip; hidden while
 * zoomed (smart-link scope).
 */
export class WeaponViewModel {
  readonly group = new THREE.Group();
  private readonly flash: THREE.Mesh;
  private readonly basePos = new THREE.Vector3(0.3, -0.26, -0.55);
  private bobClock = 0;
  private kick = 0;
  private flashTtl = 0;

  constructor(camera: THREE.PerspectiveCamera) {
    const metal = new THREE.MeshStandardMaterial({ color: GUNMETAL, roughness: 0.55, metalness: 0.6 });
    const dark = new THREE.MeshStandardMaterial({ color: DARK, roughness: 0.7, metalness: 0.4 });
    const accent = new THREE.MeshStandardMaterial({ color: ACCENT, roughness: 0.5, metalness: 0.5 });

    // Receiver.
    const receiver = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.1, 0.44), metal);
    this.group.add(receiver);
    // Angled foregrip housing tapering toward the muzzle.
    const foreend = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.075, 0.24), dark);
    foreend.position.set(0, -0.005, -0.32);
    this.group.add(foreend);
    // Barrel.
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.24, 10), dark);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.012, -0.5);
    this.group.add(barrel);
    // Carry-handle / scope rail and optic.
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.3), dark);
    rail.position.set(0, 0.075, -0.02);
    this.group.add(rail);
    const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.16, 12), metal);
    scope.rotation.x = Math.PI / 2;
    scope.position.set(0, 0.115, -0.02);
    this.group.add(scope);
    const lens = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.005, 12),
      new THREE.MeshStandardMaterial({ color: 0x66d9ff, emissive: 0x1c5064, roughness: 0.2 }),
    );
    lens.rotation.x = Math.PI / 2;
    lens.position.set(0, 0.115, 0.062);
    this.group.add(lens);
    // Magazine, angled forward.
    const mag = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.16, 0.075), accent);
    mag.position.set(0, -0.12, -0.06);
    mag.rotation.x = 0.22;
    this.group.add(mag);
    // Grip + stock.
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.12, 0.06), dark);
    grip.position.set(0, -0.1, 0.14);
    grip.rotation.x = -0.35;
    this.group.add(grip);
    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.085, 0.16), metal);
    stock.position.set(0, -0.01, 0.26);
    this.group.add(stock);

    // Muzzle flash: emissive star, shown a few frames per round.
    this.flash = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.055, 0),
      new THREE.MeshBasicMaterial({ color: 0xffd98a, transparent: true, opacity: 0.95 }),
    );
    this.flash.scale.set(1, 1, 1.9);
    this.flash.position.set(0, 0.012, -0.64);
    this.flash.visible = false;
    this.group.add(this.flash);

    this.group.position.copy(this.basePos);
    camera.add(this.group);
  }

  /** Call once per rendered frame. */
  update(
    dt: number,
    opts: { speed: number; grounded: boolean; reloading: boolean; zoomed: boolean },
  ): void {
    this.group.visible = !opts.zoomed;

    // Walk bob, driven by ground speed.
    const bobAmount = opts.grounded ? Math.min(1, opts.speed / 5.4) : 0;
    this.bobClock += dt * (4 + opts.speed * 1.1);
    const bobX = Math.sin(this.bobClock) * 0.008 * bobAmount;
    const bobY = -Math.abs(Math.cos(this.bobClock)) * 0.01 * bobAmount;

    // Fire kick decays quickly.
    this.kick = Math.max(0, this.kick - dt * 9);
    const kickZ = this.kick * 0.06;
    const kickPitch = this.kick * 0.09;

    // Reload dip.
    const dip = opts.reloading ? 0.16 : 0;

    this.group.position.set(
      this.basePos.x + bobX,
      this.basePos.y + bobY - dip,
      this.basePos.z + kickZ,
    );
    this.group.rotation.set(kickPitch + (opts.reloading ? 0.5 : 0), 0, opts.reloading ? 0.25 : 0);

    if (this.flashTtl > 0) {
      this.flashTtl -= dt;
      this.flash.visible = this.flashTtl > 0;
      this.flash.rotation.z += dt * 40;
    }
  }

  /** One fired round: kick + brief muzzle flash. */
  onShot(): void {
    this.kick = 1;
    this.flashTtl = 0.045;
    this.flash.visible = true;
  }
}
