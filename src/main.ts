import Server from "./core/server.core.js";

const server = new Server();
server.setHostname("localhost");
server.setPort(3000);
server.start();
