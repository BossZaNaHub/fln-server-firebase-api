import * as express from "express"
import * as cors from "cors"
import {Application} from "express"
import * as admin from "firebase-admin"
import * as bodyParser from "body-parser"
import Routes from "./endpoints/api"
import {ClientError} from "./errors/client-error"
import {Logger} from "./config/logger"

const NAMESPACE = "Firebase"

/**
 * Create Express App
 */
class App {
  // public api: Application
  public app: Application
  public routes: Routes
  /**
  * Call All Function Here
  */
  constructor() {
    this.firebaseSetup()
    this.app = express()
    this.routes = new Routes(this.app)
    this.applyMiddleware()
    this.errorHandler()
    this.logger()
    Logger.info(NAMESPACE, "is running")
  }
  /**
  * Call Initital Firebase
  */
  private firebaseSetup(): void {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    })
    admin.firestore().settings({
      timestampsInSnapshots: true,
    })
  }
  /**
  * Call Logger
  */
  private logger(): void {
    this.app.use((req, resp, next) => {
      Logger.info(NAMESPACE
          , `METHOD - [${req.method}],
          URL - [${req.url}],
          IP - [${req.socket.remoteAddress}]`)
      resp.on("finish", () => {
        Logger.info(NAMESPACE
            , `METHOD - [${req.method}],
          URL - [${req.url}],
          IP - [${req.socket.remoteAddress}],
          STATUS - [${resp.statusCode}]`)
      })
      next()
    })
  }
  /**
  * Call Middleware
  */
  private applyMiddleware(): void {
    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({extended: false}))
  }
  /**
  * Header Settings
  */
  // private setHeader(): void {
  //   this.app.use((req, resp, next) => {
  //     resp.header("Access-Control-Allow-Origin", "*")
  //     resp.header("Access-Control-Allow-Headers",
  //         "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  //     if (req.method == "OPTIONS") {
  //       resp.header("Access-Control-Allow-Methods",
  //           "GET PATCH DELETE POST PUT")
  //     }
  //     next()
  //   })
  // }
  /**
  * Error Handling
  */
  private errorHandler(): void {
    const error = new ClientError("Not Found", 404)
    this.app.use((req, resp) => {
      return resp.status(404).json(error)
    })
  }
}

export default App
