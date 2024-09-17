/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import Scapper from "./core/scapper.core.js";
import Server from "./core/server.core.js";

// http://localhost:3000/api/recipe

const _scapper = new Scapper();
const server = new Server("localhost", 3000);

server.start();
