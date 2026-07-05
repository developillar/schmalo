import * as THREE from 'three';
import { PLAYER, WORLD } from '@schmalo/shared';
import type { InputPayload } from '@schmalo/shared';
import {
  BattleRifle,
  TICK,
  Vitals,
  brDamagePerBullet,
  createMoveState,
  stepMovement,
  viewDirection,
  type MoveState,
} from '@schmalo/sim';
import { PlayerEntity } from '../entities/PlayerEntity';
import type { TracerPool } from '../entities/TracerPool';
import type { Hud } from '../ui/Hud';

/** Capsule-center height when standing on the floor plane. */
const FLOOR_CENTER_Y = PLAYER.STANDING_HEIGHT * 0.5;
const EYE_OFFSET = PLAYER.EYE_HEIGHT - FLOOR_CENTER_Y;
const RESPAWN_DELAY = 5;

/**
 * Single-player fallback for static hosting (GitHub Pages) or when no
 * server is reachable: the same @schmalo/sim modules that power the
 * authoritative server run locally at a fixed 60 Hz step — movement
 * feel, BR timing, and the shield/headshot rules are identical to the
 * networked game. Flat-floor collision only (graybox shapes are
 * decorative here); the training bot strafes, dies, and respawns.
 */
export class OfflineGame {
  readonly position = new THREE.Vector3(0, 4, 0);
  crouched = false;
  kills = 0;

  private readonly player: MoveState = createMoveState({ x: 0, y: 4, z: 0 });
  private readonly rifle = new BattleRifle();
  private readonly bot: MoveState = createMoveState({ x: 0, y: 4, z: -8 });
  private readonly botVitals = new Vitals();
  private readonly botEntity = new PlayerEntity(0xcc5544);
  private botRespawn = 0;
  private botClock = 0;
  private botSpawnIndex = 1;
  private accumulator = 0;
  private jumpQueued = false;

  constructor(
    entityRoot: THREE.Group,
    private readonly tracers: TracerPool,
    private readonly hud: Hud,
  ) {
    entityRoot.add(this.botEntity.mesh);
    hud.addFeedLine('Offline mode — training range');
  }

  get zoomed(): boolean {
    return this.rifle.zoomed;
  }

  /** Advance the local sim by one render frame (fixed 60 Hz substeps). */
  update(input: InputPayload, frameDt: number): void {
    if (input.jump) this.jumpQueued = true;
    if (input.zoomToggle) this.rifle.toggleZoom();
    if (input.reload) this.rifle.startReload();
    if (input.fire) {
      if (this.rifle.mag === 0) this.rifle.startReload();
      else this.rifle.pullTrigger();
    }
    if (input.melee) this.tryMelee();

    this.accumulator = Math.min(this.accumulator + frameDt, 0.25);
    while (this.accumulator >= TICK.DT) {
      this.accumulator -= TICK.DT;
      this.stepFixed(input);
    }

    this.position.set(this.player.position.x, this.player.position.y, this.player.position.z);
    this.crouched = this.player.crouched;
    this.hud.setVitals(100, 45);
    this.hud.setAmmo(this.rifle.mag, this.rifle.reserve, this.rifle.reloading);
    this.hud.setZoom(this.rifle.zoomed);
    this.hud.setScore(this.kills, 0);
  }

  private stepFixed(input: InputPayload): void {
    stepMovement(
      this.player,
      { ...input, jump: this.jumpQueued },
      TICK.DT,
      { groundHeight: FLOOR_CENTER_Y },
    );
    this.jumpQueued = false;

    for (const round of this.rifle.update(TICK.DT)) {
      this.fire(input.yaw, input.pitch, round.spreadDeg);
    }

    // Bot: strafing training target, same movement module.
    this.botClock += TICK.DT;
    if (!this.botVitals.alive) {
      this.botRespawn -= TICK.DT;
      if (this.botRespawn <= 0) this.respawnBot();
      return;
    }
    // Strafe on a fixed heading so the bot oscillates in place instead
    // of random-walking away (there are no arena walls offline).
    const strafe = Math.sin(this.botClock * 0.9);
    stepMovement(
      this.bot,
      {
        moveX: Math.abs(strafe) > 0.25 ? Math.sign(strafe) : 0,
        moveZ: 0,
        yaw: 0,
        jump: false,
        crouch: false,
      },
      TICK.DT,
      { groundHeight: FLOOR_CENTER_Y },
    );
    this.botEntity.mesh.position.set(this.bot.position.x, this.bot.position.y, this.bot.position.z);
  }

  private fire(yaw: number, pitch: number, spreadDeg: number): void {
    const origin = new THREE.Vector3(
      this.player.position.x,
      this.player.position.y + EYE_OFFSET,
      this.player.position.z,
    );
    const view = viewDirection(yaw, pitch);
    const dir = applySpread(new THREE.Vector3(view.x, view.y, view.z), spreadDeg);

    let end = origin.clone().addScaledVector(dir, 250);
    if (this.botVitals.alive) {
      const raycaster = new THREE.Raycaster(origin, dir, 0.1, 250);
      const hit = raycaster.intersectObject(this.botEntity.mesh, false)[0];
      if (hit) {
        end = hit.point;
        const botBottom = this.bot.position.y - FLOOR_CENTER_Y;
        const headshot = hit.point.y - botBottom >= PLAYER.STANDING_HEIGHT * PLAYER.HEAD_FRACTION;
        const result = this.botVitals.applyDamage({
          amount: brDamagePerBullet(hit.distance),
          headshot,
        });
        this.hud.flashHit(
          result.died ? 'kill' : headshot && result.healthDamage > 0 ? 'headshot' : result.healthDamage > 0 ? 'flesh' : 'shield',
        );
        if (result.died) this.onBotKilled(result.headshotKill);
      }
    }
    this.tracers.spawn(origin, end);
  }

  private tryMelee(): void {
    if (!this.botVitals.alive) return;
    const dx = this.bot.position.x - this.player.position.x;
    const dz = this.bot.position.z - this.player.position.z;
    if (Math.hypot(dx, dz) > 2.0) return;
    const result = this.botVitals.meleeFront();
    this.hud.flashHit(result.died ? 'kill' : result.healthDamage > 0 ? 'flesh' : 'shield');
    if (result.died) this.onBotKilled(false);
  }

  private onBotKilled(headshot: boolean): void {
    this.kills++;
    this.botRespawn = RESPAWN_DELAY;
    this.botEntity.mesh.visible = false;
    this.hud.addFeedLine(`You ${headshot ? '⌖' : '✕'} Training bot`);
  }

  private respawnBot(): void {
    const spawn = WORLD.SPAWN_POSITIONS[this.botSpawnIndex++ % WORLD.SPAWN_POSITIONS.length];
    this.bot.position.x = spawn.x + 4;
    this.bot.position.y = spawn.y;
    this.bot.position.z = spawn.z - 8;
    this.bot.velocity.x = 0;
    this.bot.velocity.y = 0;
    this.bot.velocity.z = 0;
    this.botVitals.respawn();
    this.botEntity.mesh.visible = true;
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
