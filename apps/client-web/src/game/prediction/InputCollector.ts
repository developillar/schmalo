import { PLAYER } from '@schmalo/shared';
import type { InputPayload } from '@schmalo/shared';

export class InputCollector {
  private readonly keys = new Set<string>();
  private yaw = 0;
  private pitch = 0;
  private seq = 0;

  constructor(private readonly dom: HTMLElement) {
    window.addEventListener('keydown', (e) => this.keys.add(e.code));
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    dom.addEventListener('click', () => dom.requestPointerLock());
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== dom) return;
      this.yaw -= e.movementX * 0.0022;
      this.pitch = Math.max(-PLAYER.MAX_PITCH_RAD, Math.min(PLAYER.MAX_PITCH_RAD, this.pitch - e.movementY * 0.0022));
    });
  }

  collect(dt: number): InputPayload {
    const moveX = (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);
    const moveZ = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
    return {
      seq: ++this.seq,
      dt,
      moveX,
      moveZ,
      yaw: this.yaw,
      pitch: this.pitch,
      jump: this.keys.has('Space'),
      crouch: this.keys.has('ControlLeft') || this.keys.has('KeyC'),
    };
  }
}
