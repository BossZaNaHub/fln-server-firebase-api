import * as express from "express";
import * as bodyParser from "body-parser";

/**
 * Create Express App
 */
class App {
  app = express();
  port = 3000;
  /**
  * Call Middleware
  */
  applyMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use("/v1");
  }
  /**
  * Call Start App
  */
  start() {
    this.applyMiddleware();
    this.app.listen(this.port, async () => {
      //
    });
  }
}

export const app = new App();
