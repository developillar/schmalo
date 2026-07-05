import { PLAYER } from '@schmalo/shared';
import type { InputPayload } from '@schmalo/shared';

export class InputCollector {
  private readonly keys = new Set<string>();
  private yaw = 0;
  private pitch = 0;
  private seq = 0;

  private fireHeld = false;
  private jumpEdge = false;
  private zoomEdge = false;
  private reloadEdge = false;
  private meleeEdge = false;

  constructor(private readonly dom: HTMLElement) {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && !this.keys.has('Space')) this.jumpEdge = true;
      if (e.code === 'KeyR') this.reloadEdge = true;
      if (e.code === 'KeyF' || e.code === 'KeyV') this.meleeEdge = true;
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));

    dom.addEventListener('click', () => dom.requestPointerLock());
    dom.addEventListener('contextmenu', (e) => e.preventDefault());
    dom.addEventListener('mousedown', (e) => {
      if (document.pointerLockElement !== dom) return;
      if (e.button === 0) this.fireHeld = true;
      if (e.button === 2) this.zoomEdge = true;
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.fireHeld = false;
    });

    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== this.dom) return;
      this.yaw -= e.movementX * 0.0022;
      this.pitch = Math.max(
        -PLAYER.MAX_PITCH_RAD,
        Math.min(PLAYER.MAX_PITCH_RAD, this.pitch - e.movementY * 0.0022),
      );
    });
  }

  collect(dt: number): InputPayload {
    const moveX = (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);
    const moveZ = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
    const input: InputPayload = {
      seq: ++this.seq,
      dt,
      moveX,
      moveZ,
      yaw: this.yaw,
      pitch: this.pitch,
      // Jump is edge-triggered client-side so prediction replays are
      // idempotent (holding space does not re-jump on landing).
      jump: this.jumpEdge,
      crouch: this.keys.has('ControlLeft') || this.keys.has('KeyC'),
      fire: this.fireHeld,
      reload: this.reloadEdge,
      zoomToggle: this.zoomEdge,
      melee: this.meleeEdge,
    };
    this.jumpEdge = false;
    this.zoomEdge = false;
    this.reloadEdge = false;
    this.meleeEdge = false;
    return input;
  }
}
