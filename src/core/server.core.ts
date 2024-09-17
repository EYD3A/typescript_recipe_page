import express from "express";

import { recipesRouter } from "../routes/recipes.route.js";

export default class Server {
  private readonly application!: express.Application;
  private readonly callback!: () => void;
  private readonly hostname!: string;
  private readonly port!: number;

  public constructor(hostname: string, port: number, callback?: () => void) {
    this.application = express();

    this.hostname = hostname;
    this.port = port;

    this.callback =
      callback ??
      (() => {
        console.info(`Listening @ ${this.hostname}:${this.port}`);
      });
  }

  private loadMiddleware(): void {
    this.application.use(express.json());
    this.application.use(express.urlencoded({ extended: true }));
  }

  private loadRoutes(): void {
    this.application.use(recipesRouter);
  }

  public start(): void {
    this.loadMiddleware();
    this.loadRoutes();

    this.application.listen(this.port, this.hostname, this.callback);
  }
}
