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
  @type('boolean') declare isBot: boolean;
  @type(Vec3State) declare position: Vec3State;
  @type(Vec3State) declare velocity: Vec3State;
  @type('number') declare yaw: number;
  @type('number') declare pitch: number;
  @type('boolean') declare grounded: boolean;
  @type('boolean') declare crouched: boolean;
  @type('number') declare ackSeq: number;

  @type('number') declare shield: number;
  @type('number') declare health: number;
  @type('boolean') declare alive: boolean;
  @type('number') declare mag: number;
  @type('number') declare reserve: number;
  @type('boolean') declare reloading: boolean;
  @type('boolean') declare zoomed: boolean;
  @type('number') declare respawnIn: number;
  @type('number') declare kills: number;
  @type('number') declare deaths: number;
  /** '' when on foot, else driver|passenger|gunner. */
  @type('string') declare seat: string;

  constructor(sessionId: string, isBot = false) {
    super();
    this.sessionId = sessionId;
    this.isBot = isBot;
    this.position = new Vec3State();
    this.velocity = new Vec3State();
    this.yaw = 0;
    this.pitch = 0;
    this.grounded = false;
    this.crouched = false;
    this.ackSeq = 0;
    this.shield = 100;
    this.health = 45;
    this.alive = true;
    this.mag = 36;
    this.reserve = 108;
    this.reloading = false;
    this.zoomed = false;
    this.respawnIn = 0;
    this.kills = 0;
    this.deaths = 0;
    this.seat = '';
  }
}

export class VehicleSnapshot extends Schema {
  @type('string') declare id: string;
  @type(Vec3State) declare position: Vec3State;
  @type('number') declare qx: number;
  @type('number') declare qy: number;
  @type('number') declare qz: number;
  @type('number') declare qw: number;
  @type('number') declare speed: number;
  @type('number') declare heat: number;
  @type('boolean') declare overheated: boolean;
  @type('number') declare turretYaw: number;
  @type('number') declare turretPitch: number;
  @type('string') declare driver: string;
  @type('string') declare passenger: string;
  @type('string') declare gunner: string;

  constructor(id: string) {
    super();
    this.id = id;
    this.position = new Vec3State();
    this.qx = 0;
    this.qy = 0;
    this.qz = 0;
    this.qw = 1;
    this.speed = 0;
    this.heat = 0;
    this.overheated = false;
    this.turretYaw = 0;
    this.turretPitch = 0;
    this.driver = '';
    this.passenger = '';
    this.gunner = '';
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
  @type({ map: PlayerSnapshot }) declare players: MapSchema<PlayerSnapshot>;
  @type({ map: PropSnapshot }) declare props: MapSchema<PropSnapshot>;
  @type({ map: VehicleSnapshot }) declare vehicles: MapSchema<VehicleSnapshot>;
  @type(RoomTickState) declare room: RoomTickState;
  @type('number') declare playerCount: number;
  @type(['string']) declare recentAcks: ArraySchema<string>;

  constructor() {
    super();
    this.players = new MapSchema<PlayerSnapshot>();
    this.props = new MapSchema<PropSnapshot>();
    this.vehicles = new MapSchema<VehicleSnapshot>();
    this.room = new RoomTickState();
    this.playerCount = 0;
    this.recentAcks = new ArraySchema<string>();
  }
}
