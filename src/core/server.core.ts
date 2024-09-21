import express from "express";

import { recipesRouter } from "../routes/recipes.route.js";

export default class Server {
  private readonly application!: express.Application;
  private readonly callback!: (() => void) | null;
  private hostname!: string | null;
  private port!: number | null;

  public constructor() {
    this.application = express();
  }

  public setHostname(hostname: string): void {
    this.hostname = hostname;
  }

  public setPort(port: number): void {
    this.port = port;
  }

  public start(): void {
    this.loadMiddleware();
    this.loadRoutes();
    this.application.listen(
      this.port ?? 3000,
      this.hostname ?? "127.0.0.1",
      this.callback ??
        (() => {
          console.info("Running server @ ", this.hostname, this.port);
        }),
    );
  }

  private loadMiddleware(): void {
    this.application.use(express.json());
    this.application.use(express.urlencoded({ extended: true }));
  }

  private loadRoutes(): void {
    this.application.use(recipesRouter);
  }
}
