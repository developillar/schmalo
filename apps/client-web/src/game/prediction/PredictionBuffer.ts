import type { InputPayload } from '@schmalo/shared';

export class PredictionBuffer {
  readonly pending: InputPayload[] = [];

  push(input: InputPayload): void {
    this.pending.push(input);
    if (this.pending.length > 180) this.pending.shift();
  }

  ack(seq: number): void {
    while (this.pending.length && this.pending[0].seq <= seq) this.pending.shift();
  }
}
