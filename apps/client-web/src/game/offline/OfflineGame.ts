import * as THREE from 'three';
import { PLAYER } from '@schmalo/shared';
import type { InputPayload } from '@schmalo/shared';
import {
  ARENA_SPAWNS,
  ARENA_VEHICLE_SPAWN,
  ARENA_WAYPOINTS,
  BattleRifle,
  TICK,
  Vitals,
  WARTHOG,
  brDamagePerBullet,
  createMoveState,
  resolveVehicleImpact,
  stepMovement,
  viewDirection,
  type MoveState,
  type Vec3,
} from '@schmalo/sim';
import { PlayerEntity } from '../entities/PlayerEntity';
import { VehicleEntity } from '../entities/VehicleEntity';
import type { TracerPool } from '../entities/TracerPool';
import type { WeaponViewModel } from '../entities/WeaponViewModel';
import type { Hud } from '../ui/Hud';

const HALF_HEIGHT = PLAYER.STANDING_HEIGHT * 0.5;
const EYE_OFFSET = PLAYER.EYE_HEIGHT - HALF_HEIGHT;
const RESPAWN_DELAY = 5;
const BOT_NAMES = ['Bot Alpha', 'Bot Bravo'];
const DOWN = new THREE.Vector3(0, -1, 0);

interface OfflineBot {
  name: string;
  move: MoveState;
  vitals: Vitals;
  rifle: BattleRifle;
  entity: PlayerEntity;
  respawnTimer: number;
  waypoint: Vec3 | null;
  repathTimer: number;
  strafeDir: 1 | -1;
  strafeTimer: number;
  trigger: number;
  clock: number;
}

/**
 * Single-player fallback for static hosting: the sim modules run
 * locally at a fixed 60 Hz against the shared arena. v2: real map
 * collision (raycasts against the arena meshes), two bots that hunt
 * and shoot back, player vitals with death/respawn, and an arcade
 * Warthog with splatter.
 */
export class OfflineGame {
  readonly position = new THREE.Vector3(0, 4, 0);
  crouched = false;
  kills = 0;
  deaths = 0;
  /** Non-null while driving: world position for the camera. */
  seatWorld: THREE.Vector3 | null = null;

  private readonly player: MoveState = createMoveState({ ...ARENA_SPAWNS[0] });
  private readonly vitals = new Vitals();
  private rifle = new BattleRifle();
  private respawnTimer = 0;
  private spawnIndex = 1;

  private readonly bots: OfflineBot[] = [];
  private readonly raycaster = new THREE.Raycaster();

  private readonly hog = { pos: new THREE.Vector3(), yaw: Math.PI / 2, speed: 0 };
  private readonly hogEntity = new VehicleEntity();
  private driving = false;

  private accumulator = 0;
  private jumpQueued = false;
  private lastYaw = 0;
  private lastPitch = 0;

  constructor(
    private readonly entityRoot: THREE.Group,
    private readonly mapRoot: THREE.Group,
    private readonly tracers: TracerPool,
    private readonly hud: Hud,
    private readonly viewModel: WeaponViewModel,
  ) {
    this.vitals.onShieldBreak = () => this.rifle.onDamaged();

    BOT_NAMES.forEach((name, i) => {
      const spawn = ARENA_SPAWNS[(i * 2 + 2) % ARENA_SPAWNS.length];
      const bot: OfflineBot = {
        name,
        move: createMoveState({ ...spawn }),
        vitals: new Vitals(),
        rifle: new BattleRifle(),
        entity: new PlayerEntity(i === 0 ? 0xcc5544 : 0xcc8844),
        respawnTimer: 0,
        waypoint: null,
        repathTimer: 0,
        strafeDir: 1,
        strafeTimer: 0,
        trigger: 1 + i,
        clock: i * 1.7,
      };
      entityRoot.add(bot.entity.mesh);
      this.bots.push(bot);
    });

    this.hog.pos.set(ARENA_VEHICLE_SPAWN.x, ARENA_VEHICLE_SPAWN.y, ARENA_VEHICLE_SPAWN.z);
    entityRoot.add(this.hogEntity.group);

    hud.addFeedLine('Offline mode — bots active');
  }

  get zoomed(): boolean {
    return this.rifle.zoomed;
  }

  get alive(): boolean {
    return this.vitals.alive;
  }

  update(input: InputPayload, frameDt: number): void {
    this.lastYaw = input.yaw;
    this.lastPitch = input.pitch;

    if (this.vitals.alive) {
      if (input.jump) this.jumpQueued = true;
      if (input.use) this.toggleVehicle();
      if (!this.driving) {
        if (input.zoomToggle) this.rifle.toggleZoom();
        if (input.reload) this.rifle.startReload();
        if (input.fire) {
          if (this.rifle.mag === 0) this.rifle.startReload();
          else this.rifle.pullTrigger();
        }
        if (input.melee) this.tryMelee();
      }
    }

    this.accumulator = Math.min(this.accumulator + frameDt, 0.25);
    while (this.accumulator >= TICK.DT) {
      this.accumulator -= TICK.DT;
      this.stepFixed(input);
    }

    // Presentation sync.
    this.position.set(this.player.position.x, this.player.position.y, this.player.position.z);
    this.crouched = this.player.crouched;
    this.seatWorld = this.driving
      ? this.hog.pos.clone().add(new THREE.Vector3(0, 1.45, 0))
      : null;

    const hogQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, this.hog.yaw, 0));
    this.hogEntity.setTarget(this.hog.pos, hogQuat, Math.abs(this.hog.speed), this.lastYaw, this.lastPitch);
    this.hogEntity.tick(frameDt, 0.5);

    for (const bot of this.bots) {
      bot.entity.mesh.visible = bot.vitals.alive;
      bot.entity.mesh.position.set(bot.move.position.x, bot.move.position.y, bot.move.position.z);
    }

    this.viewModel.update(frameDt, {
      speed: Math.hypot(this.player.velocity.x, this.player.velocity.z),
      grounded: this.player.grounded,
      reloading: this.rifle.reloading,
      zoomed: this.rifle.zoomed || this.driving,
    });

    this.hud.setVitals(this.vitals.shield, this.vitals.health);
    this.hud.setAmmo(this.rifle.mag, this.rifle.reserve, this.rifle.reloading);
    this.hud.setZoom(this.rifle.zoomed && !this.driving);
    this.hud.setScore(this.kills, this.deaths);
    this.hud.setDead(this.vitals.alive ? 0 : this.respawnTimer);
    if (this.vitals.alive && !this.driving) {
      const near = this.hog.pos.distanceTo(this.position) < 3.5;
      this.hud.setPrompt(near ? 'E — drive Warthog' : null);
    } else {
      this.hud.setPrompt(null);
    }
  }

  // ---------------------------------------------------------------- fixed

  private stepFixed(input: InputPayload): void {
    // Player death/respawn.
    if (!this.vitals.alive) {
      this.respawnTimer -= TICK.DT;
      if (this.respawnTimer <= 0) this.respawnPlayer();
    } else if (this.driving) {
      this.stepHog(input);
    } else {
      this.stepOnFoot(input);
    }

    this.vitals.tick(TICK.DT);
    for (const round of this.rifle.update(TICK.DT)) {
      if (this.vitals.alive && !this.driving) this.firePlayerRound(round.spreadDeg);
    }

    for (const bot of this.bots) this.stepBot(bot);
  }

  private stepOnFoot(input: InputPayload): void {
    const groundY = this.surfaceUnder(
      this.player.position.x,
      this.player.position.y,
      this.player.position.z,
    );
    this.blockWalls(this.player);
    stepMovement(this.player, { ...input, jump: this.jumpQueued }, TICK.DT, {
      groundHeight: groundY + HALF_HEIGHT,
    });
    this.jumpQueued = false;
  }

  private stepHog(input: InputPayload): void {
    const h = this.hog;
    const throttle = THREE.MathUtils.clamp(input.moveZ, -1, 1);
    if (throttle > 0) h.speed = Math.min(WARTHOG.TOP_SPEED, h.speed + 9 * TICK.DT);
    else if (throttle < 0) h.speed = Math.max(-6, h.speed - 9 * TICK.DT);
    else h.speed = THREE.MathUtils.damp(h.speed, 0, 1.6, TICK.DT);

    const speedFactor = THREE.MathUtils.clamp(Math.abs(h.speed) / 6, 0, 1);
    h.yaw += -input.moveX * 1.7 * speedFactor * Math.sign(h.speed || 1) * TICK.DT;

    const fwd = new THREE.Vector3(-Math.sin(h.yaw), 0, -Math.cos(h.yaw));
    const step = fwd.clone().multiplyScalar(h.speed * TICK.DT);

    // Obstacle stop: probe ahead at bumper height.
    if (Math.abs(h.speed) > 0.5) {
      const dir = fwd.clone().multiplyScalar(Math.sign(h.speed));
      this.raycaster.set(h.pos.clone().add(new THREE.Vector3(0, 0.6, 0)), dir);
      this.raycaster.far = 2.4 + Math.abs(h.speed) * TICK.DT;
      if (this.raycaster.intersectObjects(this.mapRoot.children, true).length > 0) {
        h.speed = 0;
        step.set(0, 0, 0);
      }
    }
    h.pos.add(step);
    const bound = 30;
    h.pos.x = THREE.MathUtils.clamp(h.pos.x, -bound, bound);
    h.pos.z = THREE.MathUtils.clamp(h.pos.z, -bound, bound);
    h.pos.y = this.surfaceUnder(h.pos.x, h.pos.y + 1, h.pos.z) + 0.55;

    // Keep the (hidden) player capsule with the hog.
    this.player.position.x = h.pos.x;
    this.player.position.y = h.pos.y + 0.9;
    this.player.position.z = h.pos.z;
    this.player.velocity.x = 0;
    this.player.velocity.z = 0;

    // Splatter bots.
    if (Math.abs(h.speed) >= 2.5) {
      for (const bot of this.bots) {
        if (!bot.vitals.alive) continue;
        const dx = bot.move.position.x - h.pos.x;
        const dz = bot.move.position.z - h.pos.z;
        if (Math.hypot(dx, dz) > 2.4) continue;
        const impact = resolveVehicleImpact(Math.abs(h.speed));
        const result = bot.vitals.applyDamage({ amount: impact.splatter ? 100000 : impact.damage });
        this.hud.flashHit(result.died ? 'kill' : 'flesh');
        if (result.died) this.onBotKilled(bot, impact.splatter ? 'splattered' : 'killed');
      }
    }
  }

  private toggleVehicle(): void {
    if (this.driving) {
      this.driving = false;
      const side = new THREE.Vector3(Math.cos(this.hog.yaw), 0, -Math.sin(this.hog.yaw));
      const out = this.hog.pos.clone().addScaledVector(side, -2.4);
      this.player.position.x = out.x;
      this.player.position.y = this.surfaceUnder(out.x, out.y + 2, out.z) + HALF_HEIGHT;
      this.player.position.z = out.z;
      this.player.velocity.x = 0;
      this.player.velocity.y = 0;
      this.player.velocity.z = 0;
      return;
    }
    if (this.hog.pos.distanceTo(this.position) < 3.5) {
      this.driving = true;
      this.hog.speed = 0;
    }
  }

  // ---------------------------------------------------------------- combat

  private firePlayerRound(spreadDeg: number): void {
    const origin = new THREE.Vector3(
      this.player.position.x,
      this.player.position.y + EYE_OFFSET,
      this.player.position.z,
    );
    const view = viewDirection(this.lastYaw, this.lastPitch);
    const dir = applySpread(new THREE.Vector3(view.x, view.y, view.z), spreadDeg);
    this.viewModel.onShot();

    // Wall distance limits the shot.
    this.raycaster.set(origin, dir);
    this.raycaster.far = 250;
    const wall = this.raycaster.intersectObjects(this.mapRoot.children, true)[0];
    const maxDist = wall ? wall.distance : 250;

    // Closest bot the ray passes through.
    let hitBot: OfflineBot | null = null;
    let hitDist = maxDist;
    let hitY = 0;
    for (const bot of this.bots) {
      if (!bot.vitals.alive) continue;
      const center = new THREE.Vector3(bot.move.position.x, bot.move.position.y, bot.move.position.z);
      const toBot = center.clone().sub(origin);
      const along = toBot.dot(dir);
      if (along < 0 || along > hitDist) continue;
      const closest = origin.clone().addScaledVector(dir, along);
      const dy = closest.y - center.y;
      const radial = Math.hypot(closest.x - center.x, closest.z - center.z);
      if (radial < PLAYER.RADIUS && Math.abs(dy) < HALF_HEIGHT + 0.05) {
        hitBot = bot;
        hitDist = along;
        hitY = closest.y;
      }
    }

    const end = origin.clone().addScaledVector(dir, hitDist);
    this.tracers.spawn(origin, end);

    if (!hitBot) return;
    const bottom = hitBot.move.position.y - HALF_HEIGHT;
    const headshot = hitY - bottom >= PLAYER.STANDING_HEIGHT * PLAYER.HEAD_FRACTION;
    const result = hitBot.vitals.applyDamage({ amount: brDamagePerBullet(hitDist), headshot });
    this.hud.flashHit(
      result.died ? 'kill' : headshot && result.healthDamage > 0 ? 'headshot' : result.healthDamage > 0 ? 'flesh' : 'shield',
    );
    if (result.died) this.onBotKilled(hitBot, result.headshotKill ? '⌖' : '✕');
  }

  private tryMelee(): void {
    for (const bot of this.bots) {
      if (!bot.vitals.alive) continue;
      const dx = bot.move.position.x - this.player.position.x;
      const dz = bot.move.position.z - this.player.position.z;
      if (Math.hypot(dx, dz) > 2.0) continue;
      const result = bot.vitals.meleeFront();
      this.hud.flashHit(result.died ? 'kill' : 'flesh');
      if (result.died) this.onBotKilled(bot, '✕');
      return;
    }
  }

  private onBotKilled(bot: OfflineBot, mark: string): void {
    this.kills++;
    bot.respawnTimer = RESPAWN_DELAY;
    this.hud.addFeedLine(`You ${mark} ${bot.name}`);
  }

  private respawnPlayer(): void {
    const spawn = ARENA_SPAWNS[this.spawnIndex++ % ARENA_SPAWNS.length];
    this.player.position.x = spawn.x;
    this.player.position.y = spawn.y;
    this.player.position.z = spawn.z;
    this.player.velocity.x = 0;
    this.player.velocity.y = 0;
    this.player.velocity.z = 0;
    this.vitals.respawn();
    this.rifle = new BattleRifle();
  }

  // ---------------------------------------------------------------- bots

  private stepBot(bot: OfflineBot): void {
    bot.clock += TICK.DT;
    if (!bot.vitals.alive) {
      bot.respawnTimer -= TICK.DT;
      if (bot.respawnTimer <= 0) {
        const spawn = ARENA_SPAWNS[Math.floor(Math.random() * ARENA_SPAWNS.length)];
        bot.move.position.x = spawn.x;
        bot.move.position.y = spawn.y;
        bot.move.position.z = spawn.z;
        bot.vitals.respawn();
        bot.rifle = new BattleRifle();
      }
      return;
    }
    bot.vitals.tick(TICK.DT);
    bot.repathTimer -= TICK.DT;
    bot.strafeTimer -= TICK.DT;
    bot.trigger -= TICK.DT;

    const p = this.player.position;
    const b = bot.move.position;
    const dx = p.x - b.x;
    const dz = p.z - b.z;
    const distXZ = Math.hypot(dx, dz);
    const playerVisible =
      this.vitals.alive && !this.driving
        ? distXZ < 40 && this.lineOfSight(bot)
        : false;

    const input: InputPayload = {
      seq: 0,
      dt: TICK.DT,
      moveX: 0,
      moveZ: 0,
      yaw: 0,
      pitch: 0,
      jump: false,
      crouch: false,
      fire: false,
      reload: false,
      zoomToggle: false,
      melee: false,
      use: false,
    };

    if (playerVisible) {
      input.yaw = Math.atan2(-dx, -dz);
      if (bot.strafeTimer <= 0) {
        bot.strafeDir = Math.random() > 0.5 ? 1 : -1;
        bot.strafeTimer = 0.7 + Math.random() * 1.1;
      }
      input.moveX = bot.strafeDir;
      if (distXZ > 24) input.moveZ = 1;
      else if (distXZ < 8) input.moveZ = -0.7;

      if (bot.trigger <= 0 && bot.rifle.mag > 0) {
        bot.rifle.pullTrigger();
        bot.trigger = 0.5 + Math.random() * 0.5;
      }
      if (bot.rifle.mag === 0) bot.rifle.startReload();
    } else {
      // Wander waypoints.
      const arrived =
        bot.waypoint && Math.hypot(bot.waypoint.x - b.x, bot.waypoint.z - b.z) < 2;
      if (!bot.waypoint || arrived || bot.repathTimer <= 0) {
        bot.waypoint = ARENA_WAYPOINTS[Math.floor(Math.random() * ARENA_WAYPOINTS.length)];
        bot.repathTimer = 6 + Math.random() * 4;
      }
      input.yaw = Math.atan2(-(bot.waypoint.x - b.x), -(bot.waypoint.z - b.z));
      input.moveZ = 1;
      if (bot.rifle.mag < 36 && !bot.rifle.reloading) bot.rifle.startReload();
    }

    const groundY = this.surfaceUnder(b.x, b.y, b.z);
    this.blockWalls(bot.move);
    stepMovement(bot.move, input, TICK.DT, { groundHeight: groundY + HALF_HEIGHT });

    // Bot rounds → chance to hit the player.
    for (const round of bot.rifle.update(TICK.DT)) {
      if (playerVisible) this.fireBotRound(bot, round.spreadDeg);
    }
  }

  private fireBotRound(bot: OfflineBot, spreadDeg: number): void {
    const origin = new THREE.Vector3(
      bot.move.position.x,
      bot.move.position.y + EYE_OFFSET,
      bot.move.position.z,
    );
    // Aim at body, head once shields pop (the Halo loop, vs the player).
    const aimY =
      this.player.position.y + (this.vitals.shield <= 0 ? EYE_OFFSET : 0);
    const target = new THREE.Vector3(this.player.position.x, aimY, this.player.position.z);
    // Bot skill: aim error on top of weapon spread.
    const dir = applySpread(
      target.clone().sub(origin).normalize(),
      spreadDeg + 2.6,
    );

    this.raycaster.set(origin, dir);
    this.raycaster.far = 250;
    const wall = this.raycaster.intersectObjects(this.mapRoot.children, true)[0];
    const maxDist = wall ? wall.distance : 250;

    const toPlayer = target.clone().sub(origin);
    const along = toPlayer.dot(dir);
    let end = origin.clone().addScaledVector(dir, maxDist);
    if (along > 0 && along < maxDist && this.vitals.alive) {
      const closest = origin.clone().addScaledVector(dir, along);
      const center = new THREE.Vector3(
        this.player.position.x,
        this.player.position.y,
        this.player.position.z,
      );
      const radial = Math.hypot(closest.x - center.x, closest.z - center.z);
      const dy = closest.y - center.y;
      if (radial < PLAYER.RADIUS && Math.abs(dy) < HALF_HEIGHT + 0.05) {
        end = closest;
        const bottom = center.y - HALF_HEIGHT;
        const headshot = closest.y - bottom >= PLAYER.STANDING_HEIGHT * PLAYER.HEAD_FRACTION;
        const result = this.vitals.applyDamage({ amount: brDamagePerBullet(along), headshot });
        this.rifle.onDamaged(); // descope
        if (result.died) {
          this.deaths++;
          this.respawnTimer = RESPAWN_DELAY;
          this.hud.addFeedLine(`${bot.name} ${result.headshotKill ? '⌖' : '✕'} You`);
        }
      }
    }
    this.tracers.spawn(origin, end);
  }

  private lineOfSight(bot: OfflineBot): boolean {
    const origin = new THREE.Vector3(
      bot.move.position.x,
      bot.move.position.y + EYE_OFFSET,
      bot.move.position.z,
    );
    const target = new THREE.Vector3(
      this.player.position.x,
      this.player.position.y + EYE_OFFSET,
      this.player.position.z,
    );
    const dir = target.clone().sub(origin);
    const dist = dir.length();
    if (dist < 1e-3) return true;
    dir.divideScalar(dist);
    this.raycaster.set(origin, dir);
    this.raycaster.far = dist;
    return this.raycaster.intersectObjects(this.mapRoot.children, true).length === 0;
  }

  // ---------------------------------------------------------------- world

  /** Y of the walkable surface under (x, z), probing down from fromY. */
  private surfaceUnder(x: number, fromY: number, z: number): number {
    this.raycaster.set(new THREE.Vector3(x, fromY + 0.3, z), DOWN);
    this.raycaster.far = 80;
    const hit = this.raycaster.intersectObjects(this.mapRoot.children, true)[0];
    return hit ? hit.point.y : 0;
  }

  /** Kill the velocity component that runs into a wall (probe at knee
   * and chest height along the motion direction). */
  private blockWalls(move: MoveState): void {
    const vx = move.velocity.x;
    const vz = move.velocity.z;
    const speed = Math.hypot(vx, vz);
    if (speed < 0.1) return;
    const dir = new THREE.Vector3(vx / speed, 0, vz / speed);
    for (const heightOffset of [-0.6, 0.4]) {
      this.raycaster.set(
        new THREE.Vector3(move.position.x, move.position.y + heightOffset, move.position.z),
        dir,
      );
      this.raycaster.far = PLAYER.RADIUS + speed * TICK.DT + 0.05;
      const hit = this.raycaster.intersectObjects(this.mapRoot.children, true)[0];
      if (hit && hit.face) {
        const normal = hit.face.normal.clone().transformDirection(hit.object.matrixWorld);
        normal.y = 0;
        if (normal.lengthSq() < 1e-6) continue;
        normal.normalize();
        const into = move.velocity.x * normal.x + move.velocity.z * normal.z;
        if (into < 0) {
          move.velocity.x -= normal.x * into;
          move.velocity.z -= normal.z * into;
        }
        return;
      }
    }
  }
}

function applySpread(dir: THREE.Vector3, spreadDeg: number): THREE.Vector3 {
  if (spreadDeg <= 0) return dir;
  const spreadRad = (spreadDeg * Math.PI) / 180;
  const angle = spreadRad * Math.sqrt(Math.random());
  const azimuth = Math.random() * Math.PI * 2;
  const up = Math.abs(dir.y) > 0.99 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const side = new THREE.Vector3().crossVectors(dir, up).normalize();
  const upOrtho = new THREE.Vector3().crossVectors(side, dir);
  return dir
    .clone()
    .multiplyScalar(Math.cos(angle))
    .addScaledVector(side, Math.sin(angle) * Math.cos(azimuth))
    .addScaledVector(upOrtho, Math.sin(angle) * Math.sin(azimuth))
    .normalize();
}
