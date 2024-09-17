import express from "express";
import { recipesRouter } from "../routes/recipes.route.js";
export default class Server {
    constructor(hostname, port, callback) {
        this.application = express();
        this.hostname = hostname;
        this.port = port;
        this.callback =
            callback ??
                (() => {
                    console.info(`Listening @ ${this.hostname}:${this.port}`);
                });
    }
    loadMiddleware() {
        this.application.use(express.json());
        this.application.use(express.urlencoded({ extended: true }));
    }
    loadRoutes() {
        this.application.use(recipesRouter);
    }
    start() {
        this.loadMiddleware();
        this.loadRoutes();
        this.application.listen(this.port, this.hostname, this.callback);
    }
}
//# sourceMappingURL=server.core.js.map