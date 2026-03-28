import RAPIER from '@dimforge/rapier3d-compat';
import { PLAYER } from '@schmalo/shared';
import { PropSnapshot, type SandboxRoomState } from './GameState';

interface PropRuntime {
  body: RAPIER.RigidBody;
  snap: PropSnapshot;
}

export class PhysicsWorld {
  world: RAPIER.World;
  readonly rapier = RAPIER;
  readonly props = new Map<string, PropRuntime>();

  private constructor(private readonly state: SandboxRoomState) {
    this.world = new RAPIER.World({ x: 0, y: -PLAYER.GRAVITY, z: 0 });
  }

  static async create(state: SandboxRoomState): Promise<PhysicsWorld> {
    await RAPIER.init();
    const pw = new PhysicsWorld(state);
    pw.createStaticLevel();
    pw.createProps();
    return pw;
  }

  step(): void {
    this.world.step();
    for (const runtime of this.props.values()) {
      const t = runtime.body.translation();
      const r = runtime.body.rotation();
      runtime.snap.position.set(t.x, t.y, t.z);
      runtime.snap.rotation.set(r.x, r.y, r.z);
    }
  }

  private createStaticLevel(): void {
    const floor = this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed());
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(30, 1, 30).setTranslation(0, -1, 0), floor);
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(30, 8, 1).setTranslation(0, 8, -30), floor);
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(30, 8, 1).setTranslation(0, 8, 30), floor);
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(1, 8, 30).setTranslation(-30, 8, 0), floor);
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(1, 8, 30).setTranslation(30, 8, 0), floor);

    this.world.createCollider(
      RAPIER.ColliderDesc.cuboid(4, 0.5, 4).setTranslation(9, 2, -10).setRotation({ x: 0.2, y: 0, z: 0, w: 1 }),
      floor,
    );
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(3, 1.5, 3).setTranslation(-12, 1.5, 4), floor);
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(8, 0.8, 2).setTranslation(0, 0.8, 12), floor);
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(8, 0.8, 2).setTranslation(0, 2.4, 16), floor);

    this.world.createCollider(RAPIER.ColliderDesc.cuboid(5, 1, 3).setTranslation(-14, 1, -12), floor);
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(5, 0.4, 3).setTranslation(-14, 2.6, -12), floor);

    this.world.createCollider(RAPIER.ColliderDesc.cuboid(4, 4, 4).setTranslation(18, -4, 0), floor);
  }

  private createProps(): void {
    this.spawnBox('cube-1', 'smallCube', 0.45, 1.5, 0.8, { x: -12, y: 3, z: -10 });
    this.spawnBox('crate-1', 'mediumCrate', 0.75, 3.5, 1.2, { x: -10, y: 4, z: -10 });
    this.spawnBall('sphere-1', 'sphere', 0.55, 1.2, { x: -8, y: 5, z: -10 });
  }

  private spawnBox(id: string, kind: string, size: number, mass: number, damping: number, pos: { x: number; y: number; z: number }): void {
    const body = this.world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic().setTranslation(pos.x, pos.y, pos.z).setLinearDamping(damping),
    );
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(size, size, size).setMass(mass), body);
    this.bindProp(id, kind, body);
  }

  private spawnBall(id: string, kind: string, radius: number, mass: number, pos: { x: number; y: number; z: number }): void {
    const body = this.world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic().setTranslation(pos.x, pos.y, pos.z).setLinearDamping(0.8),
    );
    this.world.createCollider(RAPIER.ColliderDesc.ball(radius).setMass(mass), body);
    this.bindProp(id, kind, body);
  }

  private bindProp(id: string, kind: string, body: RAPIER.RigidBody): void {
    const snap = new PropSnapshot(id, kind);
    this.state.props.set(id, snap);
    this.props.set(id, { body, snap });
  }
}
