import { PLAYER } from '@schmalo/shared';
import type { InputPayload } from '@schmalo/shared';
import type { PlayerManager } from './PlayerManager';
import type { SandboxRoomState } from '../world/GameState';

export class PlayerSystem {
  constructor(private readonly players: PlayerManager, private readonly state: SandboxRoomState) {}

  enqueueInput(sessionId: string, input: InputPayload): void {
    const player = this.players.get(sessionId);
    if (!player) return;
    player.inputs.push(input);
  }

  step(dt: number): void {
    for (const player of this.players.values()) {
      if (player.inputs.length === 0) {
        this.syncSnapshot(player.sessionId);
        continue;
      }

      for (const input of player.inputs.splice(0)) {
        this.applyInput(player.sessionId, input, dt);
      }

      this.syncSnapshot(player.sessionId);
    }
  }

  private applyInput(sessionId: string, input: InputPayload, dt: number): void {
    const player = this.players.get(sessionId);
    if (!player) return;

    const body = player.body;
    const vel = body.linvel();
    const yaw = input.yaw;

    const forwardX = Math.sin(yaw);
    const forwardZ = Math.cos(yaw);
    const rightX = Math.cos(yaw);
    const rightZ = -Math.sin(yaw);

    let wishX = forwardX * input.moveZ + rightX * input.moveX;
    let wishZ = forwardZ * input.moveZ + rightZ * input.moveX;
    const wishLen = Math.hypot(wishX, wishZ);
    if (wishLen > 1e-5) {
      wishX /= wishLen;
      wishZ /= wishLen;
    }

    const speed = PLAYER.MOVE_SPEED * (input.crouch ? PLAYER.CROUCH_SPEED_MULTIPLIER : 1);
    const accel = player.grounded ? PLAYER.GROUND_ACCEL : PLAYER.AIR_ACCEL;

    const targetVX = wishX * speed;
    const targetVZ = wishZ * speed;

    const nextVX = vel.x + (targetVX - vel.x) * Math.min(1, accel * dt / speed);
    const nextVZ = vel.z + (targetVZ - vel.z) * Math.min(1, accel * dt / speed);

    const y = body.translation().y;
    const playerBottom = y - PLAYER.STANDING_HEIGHT * 0.5;
    player.grounded = playerBottom <= 0.06;

    let vy = vel.y;
    if (input.jump && player.grounded) {
      vy = PLAYER.JUMP_VELOCITY;
      player.grounded = false;
    }

    player.crouched = input.crouch;
    if (!player.grounded) {
      vy -= PLAYER.GRAVITY * dt;
    } else if (vy < 0) {
      vy = 0;
    }

    body.setLinvel({ x: nextVX, y: vy, z: nextVZ }, true);
    player.yaw = input.yaw;
    player.pitch = input.pitch;
    player.lastProcessedInput = input.seq;
  }

  private syncSnapshot(sessionId: string): void {
    const player = this.players.get(sessionId);
    const snapshot = this.state.players.get(sessionId);
    if (!player || !snapshot) return;

    const pos = player.body.translation();
    const vel = player.body.linvel();
    snapshot.position.set(pos.x, pos.y, pos.z);
    snapshot.velocity.set(vel.x, vel.y, vel.z);
    snapshot.yaw = player.yaw;
    snapshot.pitch = player.pitch;
    snapshot.grounded = player.grounded;
    snapshot.crouched = player.crouched;
    snapshot.ackSeq = player.lastProcessedInput;
  }
}
