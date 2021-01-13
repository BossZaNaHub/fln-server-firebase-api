// import logger from "../../config/logger";
import {Request, Response} from "express"
import {Logger} from "../../config/logger"
// import {UsersCollection} from "../../models/user"
// import * as Types from "../../models/user.types"
import {Firestore} from "../../services/firebase"

const NAMESPACE = "User Controller"

class UserController {
  public getPing(req: Request, resp: Response) {
    resp.status(200).json({
      message: "pong",
    })
  }

  // public getAllUser = async(req: Request, resp: Response) => {
  //   const users = await Firestore.collection("users").get()
  // }
  async getUsers() {
    const queryUser = await Firestore.collection("users").doc().get()
    const result: any = queryUser.data()

    Logger.info(NAMESPACE, result)
  }
}

export default UserController
