import * as THREE from 'three';

const OLIVE = 0x6d7355;
const DARK = 0x2b2e27;
const TIRE = 0x1c1e21;
const METAL = 0x4c5245;

/**
 * Procedural Warthog-style light recon vehicle: chassis, hood, roll
 * cage, four spinning wheels, rear turret with barrel. Interpolates
 * toward server transforms; wheels spin with speed and the turret
 * tracks the gunner's aim.
 */
export class VehicleEntity {
  readonly group = new THREE.Group();
  private readonly wheels: THREE.Mesh[] = [];
  private readonly turretYawPivot = new THREE.Group();
  private readonly turretPitchPivot = new THREE.Group();
  private readonly targetPos = new THREE.Vector3();
  private readonly targetQuat = new THREE.Quaternion();
  private targetTurretYaw = 0;
  private targetTurretPitch = 0;
  private speed = 0;
  private wheelSpin = 0;

  constructor() {
    const olive = new THREE.MeshStandardMaterial({ color: OLIVE, roughness: 0.7, metalness: 0.25 });
    const dark = new THREE.MeshStandardMaterial({ color: DARK, roughness: 0.8 });
    const metal = new THREE.MeshStandardMaterial({ color: METAL, roughness: 0.5, metalness: 0.5 });
    const tire = new THREE.MeshStandardMaterial({ color: TIRE, roughness: 0.95 });

    // Chassis tub.
    const tub = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.7, 3.9), olive);
    tub.position.y = 0.15;
    this.group.add(tub);
    // Sloped hood (front is -Z).
    const hood = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.45, 1.3), olive);
    hood.position.set(0, 0.45, -1.35);
    hood.rotation.x = 0.14;
    this.group.add(hood);
    // Cab floor + dash.
    const dash = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.5, 0.25), dark);
    dash.position.set(0, 0.65, -0.65);
    this.group.add(dash);
    // Roll cage.
    const barGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.15, 8);
    for (const [x, z] of [[-0.85, -0.55], [0.85, -0.55], [-0.85, 0.55], [0.85, 0.55]] as const) {
      const bar = new THREE.Mesh(barGeo, metal);
      bar.position.set(x, 1.05, z);
      this.group.add(bar);
    }
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.08, 1.35), metal);
    roof.position.set(0, 1.62, 0);
    this.group.add(roof);
    // Seats.
    for (const x of [-0.55, 0.55]) {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.55, 0.5), dark);
      seat.position.set(x, 0.75, 0.25);
      this.group.add(seat);
    }
    // Rear bed.
    const bed = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.35, 1.15), dark);
    bed.position.set(0, 0.6, 1.35);
    this.group.add(bed);

    // Wheels.
    const wheelGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.36, 14);
    wheelGeo.rotateZ(Math.PI / 2);
    for (const [x, z] of [[-1.05, -1.3], [1.05, -1.3], [-1.05, 1.3], [1.05, 1.3]] as const) {
      const wheel = new THREE.Mesh(wheelGeo, tire);
      wheel.position.set(x, -0.25, z);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.38, 10).rotateZ(Math.PI / 2), metal);
      wheel.add(hub);
      this.wheels.push(wheel);
      this.group.add(wheel);
    }

    // Turret on the rear bed: yaw pivot → pitch pivot → gun.
    this.turretYawPivot.position.set(0, 0.95, 1.35);
    const mount = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.5, 10), metal);
    mount.position.y = 0.2;
    this.turretYawPivot.add(mount);
    this.turretPitchPivot.position.set(0, 0.5, 0);
    this.turretYawPivot.add(this.turretPitchPivot);
    const receiver = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.3, 0.8), dark);
    this.turretPitchPivot.add(receiver);
    const barrels = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.85, 10), metal);
    barrels.rotation.x = Math.PI / 2;
    barrels.position.set(0, 0, -0.75);
    this.turretPitchPivot.add(barrels);
    const shield = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.45, 0.06), metal);
    shield.position.set(0, 0.1, -0.35);
    this.turretPitchPivot.add(shield);
    this.group.add(this.turretYawPivot);

    this.group.traverse((o) => {
      o.castShadow = true;
    });
  }

  setTarget(
    pos: { x: number; y: number; z: number },
    quat: { x: number; y: number; z: number; w: number },
    speed: number,
    turretYaw: number,
    turretPitch: number,
  ): void {
    this.targetPos.set(pos.x, pos.y, pos.z);
    this.targetQuat.set(quat.x, quat.y, quat.z, quat.w);
    this.speed = speed;
    this.targetTurretYaw = turretYaw;
    this.targetTurretPitch = turretPitch;
  }

  snap(): void {
    this.group.position.copy(this.targetPos);
    this.group.quaternion.copy(this.targetQuat);
  }

  tick(dt: number, alpha = 0.25): void {
    this.group.position.lerp(this.targetPos, alpha);
    this.group.quaternion.slerp(this.targetQuat, alpha);

    this.wheelSpin += (this.speed / 0.44) * dt;
    for (const wheel of this.wheels) wheel.rotation.x = this.wheelSpin;

    // Turret aim is world-yaw; convert to chassis-local.
    const chassisYaw = new THREE.Euler().setFromQuaternion(this.group.quaternion, 'YXZ').y;
    const localYaw = this.targetTurretYaw - chassisYaw + Math.PI; // gun faces rear at rest
    this.turretYawPivot.rotation.y += shortestAngle(localYaw - this.turretYawPivot.rotation.y) * 0.3;
    this.turretPitchPivot.rotation.x +=
      (THREE.MathUtils.clamp(-this.targetTurretPitch, -0.5, 0.35) - this.turretPitchPivot.rotation.x) * 0.3;
  }
}

function shortestAngle(a: number): number {
  return Math.atan2(Math.sin(a), Math.cos(a));
}
