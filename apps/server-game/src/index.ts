import http from 'node:http';
import express from 'express';
import { Server } from '@colyseus/core';
import { WebSocketTransport } from '@colyseus/ws-transport';
import { WORLD } from '@schmalo/shared';
import { SandboxRoom } from './rooms/SandboxRoom';

const port = Number(process.env.PORT ?? 2567);
const app = express();
app.get('/health', (_req, res) => res.json({ ok: true }));

const server = http.createServer(app);
const gameServer = new Server({ transport: new WebSocketTransport({ server }) });
gameServer.define(WORLD.ROOM_NAME, SandboxRoom);

server.listen(port, () => {
  console.log(`server listening on :${port}`);
});
