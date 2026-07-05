import { MSG } from '@schmalo/shared';
import type { HitConfirmPayload, KillFeedPayload, ShotFiredPayload } from '@schmalo/shared';
import { BATTLE_RIFLE } from '@schmalo/sim';
import { GameScene } from './game/scene/GameScene';
import { GameClient } from './game/net/GameClient';
import { InputCollector } from './game/prediction/InputCollector';
import { PredictionBuffer } from './game/prediction/PredictionBuffer';
import { LocalPlayerPredictor } from './game/prediction/LocalPlayerPredictor';
import { StateBinder } from './game/net/StateBinder';
import { CameraController } from './game/scene/CameraController';
import { DebugPanel } from './game/ui/DebugPanel';
import { Hud } from './game/ui/Hud';
import { TracerPool } from './game/entities/TracerPool';
import { ForgeEditor } from './game/forge/ForgeEditor';

async function main(): Promise<void> {
  const app = document.querySelector<HTMLElement>('#app');
  if (!app) throw new Error('missing app root');

  const scene = new GameScene(app);
  const client = new GameClient(import.meta.env.VITE_SERVER_URL ?? 'ws://localhost:2567');
  const room = await client.connect();

  const binder = new StateBinder(room, scene.entityRoot, room.sessionId);
  binder.bind();

  const collector = new InputCollector(scene.renderer.domElement);
  const buffer = new PredictionBuffer();
  const predictor = new LocalPlayerPredictor();
  const camera = new CameraController(scene.camera);
  const debug = new DebugPanel(app);
  const hud = new Hud(app);
  const tracers = new TracerPool(scene.entityRoot);
  const forge = new ForgeEditor(scene.scene, scene.renderer.domElement, app);
  forge.bindCamera(scene.camera);

  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyB') forge.toggle();
  });

  let mySnapshot: any = null;
  room.state.players.onAdd((player: any, key: string) => {
    if (key !== room.sessionId) return;
    mySnapshot = player;
    player.onChange(() => {
      predictor.reconcile(player.position);
      buffer.ack(player.ackSeq);
      predictor.grounded = player.grounded;
      predictor.crouched = player.crouched;
      predictor.velocity.set(player.velocity.x, player.velocity.y, player.velocity.z);

      for (const pending of buffer.pending) predictor.apply(pending);
    });
  });

  const shortName = (id: string): string => (id.startsWith('bot-') ? 'Training bot' : id === room.sessionId ? 'You' : id.slice(0, 6));

  room.onMessage(MSG.HIT_CONFIRM, (payload: HitConfirmPayload) => hud.flashHit(payload.kind));
  room.onMessage(MSG.KILL_FEED, (payload: KillFeedPayload) => {
    hud.addFeedLine(`${shortName(payload.killer)} ${payload.headshot ? '⌖' : '✕'} ${shortName(payload.victim)}`);
  });
  room.onMessage(MSG.SHOT_FIRED, (payload: ShotFiredPayload) => {
    tracers.spawn(payload.origin, payload.end);
  });

  let last = performance.now();
  let pingClock = 0;

  const loop = (now: number): void => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    const input = collector.collect(dt);

    if (forge.active) {
      // Monitor mode: the player stands still (but keeps acking) while
      // the editor flies the camera.
      client.sendInput({
        ...input,
        moveX: 0,
        moveZ: 0,
        jump: false,
        fire: false,
        reload: false,
        zoomToggle: false,
        melee: false,
      });
      forge.update(dt, scene.camera, input.yaw, input.pitch);
    } else {
      client.sendInput(input);
      buffer.push(input);
      predictor.apply(input);
      const zoomed = mySnapshot?.zoomed === true;
      camera.update(
        predictor.predictedPosition,
        input.yaw,
        input.pitch,
        predictor.crouched,
        zoomed ? BATTLE_RIFLE.ZOOM_FACTOR : 1,
      );
    }

    binder.tick();
    tracers.tick(dt);
    hud.tick(dt);

    if (mySnapshot) {
      hud.setVitals(mySnapshot.shield, mySnapshot.health);
      hud.setAmmo(mySnapshot.mag, mySnapshot.reserve, mySnapshot.reloading);
      hud.setZoom(mySnapshot.zoomed && !forge.active);
      hud.setScore(mySnapshot.kills, mySnapshot.deaths);
      hud.setDead(mySnapshot.alive ? 0 : mySnapshot.respawnIn);
    }

    pingClock += dt;
    if (pingClock > 1) {
      client.sendPing();
      pingClock = 0;
    }

    debug.set({
      pingMs: client.pingMs,
      predicted: predictor.predictedPosition.toArray().map((v) => v.toFixed(2)).join(', '),
      authoritative: predictor.authoritativePosition.toArray().map((v) => v.toFixed(2)).join(', '),
      correctionDistance: predictor.correctionDistance,
      speed: Math.hypot(predictor.velocity.x, predictor.velocity.z),
      grounded: predictor.grounded,
      crouched: predictor.crouched,
      playerCount: room.state.playerCount,
      tickRate: room.state.room.simRate,
    });

    scene.render();
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
}

main().catch((err) => console.error(err));
