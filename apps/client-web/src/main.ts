import { GameScene } from './game/scene/GameScene';
import { GameClient } from './game/net/GameClient';
import { InputCollector } from './game/prediction/InputCollector';
import { PredictionBuffer } from './game/prediction/PredictionBuffer';
import { LocalPlayerPredictor } from './game/prediction/LocalPlayerPredictor';
import { StateBinder } from './game/net/StateBinder';
import { CameraController } from './game/scene/CameraController';
import { DebugPanel } from './game/ui/DebugPanel';

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

  let last = performance.now();
  let pingClock = 0;

  room.state.players.onAdd((player: any, key: string) => {
    if (key !== room.sessionId) return;
    player.onChange(() => {
      predictor.reconcile(player.position);
      buffer.ack(player.ackSeq);
      predictor.grounded = player.grounded;
      predictor.crouched = player.crouched;
      predictor.velocity.set(player.velocity.x, player.velocity.y, player.velocity.z);

      for (const pending of buffer.pending) predictor.apply(pending);
    });
  });

  const loop = (now: number): void => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    const input = collector.collect(dt);
    client.sendInput(input);
    buffer.push(input);
    predictor.apply(input);

    binder.tick();
    camera.update(predictor.predictedPosition, input.yaw, input.pitch, predictor.crouched);

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
