import type { InputPayload } from '@schmalo/shared';
import type { PlayerManager } from './PlayerManager';

export const BOT_ID = 'bot-training';

/**
 * M1 training bot: a strafing target with real vitals that respawns via
 * the normal kill flow. It feeds synthesized inputs through the same
 * pipeline as human players, so it exercises the full authoritative path.
 */
export class BotSystem {
  private clock = 0;
  private seq = 0;

  constructor(private readonly players: PlayerManager) {}

  spawn(): void {
    this.players.add(BOT_ID, true);
  }

  step(dt: number): InputPayload | null {
    const bot = this.players.get(BOT_ID);
    if (!bot) return null;
    this.clock += dt;

    // Slow strafe pattern with a heading change every few seconds.
    const strafe = Math.sin(this.clock * 0.9);
    const yaw = Math.sin(this.clock * 0.23) * Math.PI;

    return {
      seq: ++this.seq,
      dt,
      moveX: Math.abs(strafe) > 0.25 ? Math.sign(strafe) : 0,
      moveZ: 0,
      yaw,
      pitch: 0,
      jump: false,
      crouch: false,
      fire: false,
      reload: false,
      zoomToggle: false,
      melee: false,
    };
  }
}
