export interface DebugStats {
  pingMs: number;
  predicted: string;
  authoritative: string;
  correctionDistance: number;
  speed: number;
  grounded: boolean;
  crouched: boolean;
  playerCount: number;
  tickRate: number;
}

export class DebugPanel {
  private readonly el = document.createElement('pre');

  constructor(parent: HTMLElement) {
    this.el.style.position = 'fixed';
    this.el.style.left = '8px';
    this.el.style.top = '8px';
    this.el.style.margin = '0';
    this.el.style.padding = '10px';
    this.el.style.background = 'rgba(0,0,0,0.6)';
    this.el.style.fontSize = '12px';
    parent.appendChild(this.el);
  }

  set(stats: DebugStats): void {
    this.el.textContent = [
      `ping: ${stats.pingMs.toFixed(1)}ms`,
      `predicted: ${stats.predicted}`,
      `authoritative: ${stats.authoritative}`,
      `correction: ${stats.correctionDistance.toFixed(3)}`,
      `speed: ${stats.speed.toFixed(2)} m/s`,
      `grounded: ${stats.grounded}`,
      `crouched: ${stats.crouched}`,
      `players: ${stats.playerCount}`,
      `tick: ${stats.tickRate}`,
    ].join('\n');
  }
}
