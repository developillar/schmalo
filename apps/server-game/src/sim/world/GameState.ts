import { ArraySchema, MapSchema, Schema, type } from '@colyseus/schema';

export class Vec3State extends Schema {
  @type('number') declare x: number;
  @type('number') declare y: number;
  @type('number') declare z: number;

  constructor(x = 0, y = 0, z = 0) {
    super();
    this.x = x;
    this.y = y;
    this.z = z;
  }

  set(x: number, y: number, z: number): this {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
}

export class PlayerSnapshot extends Schema {
  @type('string') declare sessionId: string;
  @type(Vec3State) declare position: Vec3State;
  @type(Vec3State) declare velocity: Vec3State;
  @type('number') declare yaw: number;
  @type('number') declare pitch: number;
  @type('boolean') declare grounded: boolean;
  @type('boolean') declare crouched: boolean;
  @type('number') declare ackSeq: number;

  constructor(sessionId: string) {
    super();
    this.sessionId = sessionId;
    this.position = new Vec3State();
    this.velocity = new Vec3State();
    this.yaw = 0;
    this.pitch = 0;
    this.grounded = false;
    this.crouched = false;
    this.ackSeq = 0;
  }
}

export class PropSnapshot extends Schema {
  @type('string') declare id: string;
  @type('string') declare kind: string;
  @type(Vec3State) declare position: Vec3State;
  @type(Vec3State) declare rotation: Vec3State;

  constructor(id: string, kind: string) {
    super();
    this.id = id;
    this.kind = kind;
    this.position = new Vec3State();
    this.rotation = new Vec3State();
  }
}

export class RoomTickState extends Schema {
  @type('number') declare tick: number;
  @type('number') declare simRate: number;

  constructor() {
    super();
    this.tick = 0;
    this.simRate = 60;
  }
}

export class SandboxRoomState extends Schema {
  @type({ map: PlayerSnapshot }) declare players = new MapSchema<PlayerSnapshot>();
  @type({ map: PropSnapshot }) declare props = new MapSchema<PropSnapshot>();
  @type(RoomTickState) declare room = new RoomTickState();
  @type('number') declare playerCount = 0;
  @type(['string']) declare recentAcks = new ArraySchema<string>();
}
