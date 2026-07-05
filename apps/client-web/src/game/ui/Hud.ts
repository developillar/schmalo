import type { HitConfirmPayload } from '@schmalo/shared';

/** DOM-overlay HUD: shield bar, health, ammo, reticle + hitmarkers,
 * kill feed, respawn overlay. Pure presentation — all values come from
 * the authoritative snapshot. */
export class Hud {
  private readonly root = document.createElement('div');
  private readonly shieldFill = document.createElement('div');
  private readonly healthRow = document.createElement('div');
  private readonly ammo = document.createElement('div');
  private readonly reticle = document.createElement('div');
  private readonly hitmarker = document.createElement('div');
  private readonly feed = document.createElement('div');
  private readonly deathOverlay = document.createElement('div');
  private readonly score = document.createElement('div');
  private readonly zoomVignette = document.createElement('div');
  private hitTimer = 0;

  constructor(parent: HTMLElement) {
    this.root.style.cssText =
      'position:fixed;inset:0;pointer-events:none;font-family:monospace;color:#dfe9f5;user-select:none';
    parent.appendChild(this.root);

    // Shield bar (top center, segmented look via gradient stripes).
    const shieldWrap = document.createElement('div');
    shieldWrap.style.cssText =
      'position:absolute;top:14px;left:50%;transform:translateX(-50%);width:280px;height:12px;' +
      'border:1px solid #4d6a8a;background:#101820cc;border-radius:3px;overflow:hidden';
    this.shieldFill.style.cssText =
      'height:100%;width:100%;background:repeating-linear-gradient(90deg,#57b3ff 0 26px,#3d86c9 26px 28px);' +
      'transition:width 80ms linear';
    shieldWrap.appendChild(this.shieldFill);
    this.root.appendChild(shieldWrap);

    // Health pips (revealed prominently when shield is low).
    this.healthRow.style.cssText =
      'position:absolute;top:30px;left:50%;transform:translateX(-50%);display:flex;gap:3px';
    this.root.appendChild(this.healthRow);

    this.ammo.style.cssText =
      'position:absolute;right:24px;bottom:20px;font-size:22px;text-align:right;text-shadow:0 0 4px #000';
    this.root.appendChild(this.ammo);

    this.reticle.style.cssText =
      'position:absolute;left:50%;top:50%;width:26px;height:26px;transform:translate(-50%,-50%);' +
      'border:2px solid #cfe6ffb0;border-radius:50%';
    this.root.appendChild(this.reticle);

    this.hitmarker.style.cssText =
      'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:26px;' +
      'font-weight:bold;opacity:0;text-shadow:0 0 4px #000';
    this.hitmarker.textContent = '✕';
    this.root.appendChild(this.hitmarker);

    this.feed.style.cssText =
      'position:absolute;top:14px;right:20px;font-size:13px;text-align:right;text-shadow:0 0 3px #000';
    this.root.appendChild(this.feed);

    this.score.style.cssText =
      'position:absolute;left:20px;bottom:20px;font-size:14px;text-shadow:0 0 3px #000';
    this.root.appendChild(this.score);

    this.zoomVignette.style.cssText =
      'position:absolute;inset:0;display:none;box-shadow:inset 0 0 180px 90px #000;';
    const zoomTag = document.createElement('div');
    zoomTag.textContent = '2×';
    zoomTag.style.cssText = 'position:absolute;left:50%;top:58%;transform:translateX(-50%);font-size:16px';
    this.zoomVignette.appendChild(zoomTag);
    this.root.appendChild(this.zoomVignette);

    this.deathOverlay.style.cssText =
      'position:absolute;inset:0;display:none;align-items:center;justify-content:center;' +
      'background:#200a0acc;font-size:28px;letter-spacing:2px';
    this.root.appendChild(this.deathOverlay);
  }

  setVitals(shield: number, health: number): void {
    this.shieldFill.style.width = `${Math.max(0, Math.min(100, shield))}%`;
    this.shieldFill.style.background =
      shield <= 0
        ? '#38221f'
        : 'repeating-linear-gradient(90deg,#57b3ff 0 26px,#3d86c9 26px 28px)';
    const pips = Math.max(0, Math.ceil((health / 45) * 9));
    if (this.healthRow.childElementCount !== 9) {
      this.healthRow.replaceChildren(
        ...Array.from({ length: 9 }, () => {
          const pip = document.createElement('div');
          pip.style.cssText = 'width:26px;height:4px;border-radius:2px';
          return pip;
        }),
      );
    }
    Array.from(this.healthRow.children).forEach((el, i) => {
      (el as HTMLElement).style.background = i < pips ? (shield <= 0 ? '#ff5f4d' : '#9fd08a') : '#332222';
    });
  }

  setAmmo(mag: number, reserve: number, reloading: boolean): void {
    this.ammo.innerHTML = reloading
      ? '<span style="color:#ffb64d">RELOADING…</span>'
      : `${mag} <span style="opacity:.6;font-size:15px">/ ${reserve}</span>`;
  }

  setZoom(zoomed: boolean): void {
    this.zoomVignette.style.display = zoomed ? 'block' : 'none';
    this.reticle.style.width = zoomed ? '54px' : '26px';
    this.reticle.style.height = zoomed ? '54px' : '26px';
  }

  setScore(kills: number, deaths: number): void {
    this.score.textContent = `K ${kills}  /  D ${deaths}`;
  }

  setDead(respawnIn: number): void {
    if (respawnIn > 0) {
      this.deathOverlay.style.display = 'flex';
      this.deathOverlay.textContent = `RESPAWN IN ${Math.ceil(respawnIn)}`;
    } else {
      this.deathOverlay.style.display = 'none';
    }
  }

  flashHit(kind: HitConfirmPayload['kind']): void {
    const colors: Record<HitConfirmPayload['kind'], string> = {
      shield: '#8fd0ff',
      flesh: '#ffd27a',
      headshot: '#ff9d5c',
      kill: '#ff4d4d',
    };
    this.hitmarker.style.color = colors[kind];
    this.hitmarker.textContent = kind === 'kill' ? '☠' : '✕';
    this.hitTimer = kind === 'kill' ? 0.6 : 0.25;
  }

  addFeedLine(text: string): void {
    const line = document.createElement('div');
    line.textContent = text;
    this.feed.prepend(line);
    while (this.feed.childElementCount > 5) this.feed.lastElementChild?.remove();
    setTimeout(() => line.remove(), 6000);
  }

  tick(dt: number): void {
    if (this.hitTimer > 0) {
      this.hitTimer -= dt;
      this.hitmarker.style.opacity = String(Math.max(0, Math.min(1, this.hitTimer * 5)));
    } else {
      this.hitmarker.style.opacity = '0';
    }
  }
}
