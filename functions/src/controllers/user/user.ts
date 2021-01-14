// import logger from "../../config/logger";
import {Request, Response} from "express"
import {Logger} from "../../config/logger"
import {Firestore, UserCollection} from "../../services/firebase"
import {User} from "../../models/user"

const NAMESPACE = "User Controller"

class UserController {
  public getPing(req: Request, resp: Response) {
    return resp.status(200).json({
      message: "pong",
    })
  }

  public getAllUser = async (req: Request, resp: Response) => {
    const userQuerySnapshot = await Firestore.collection(UserCollection).get()
    // const result: any = userQuerySnapshot.data()
    const users: any[] = []

    userQuerySnapshot.forEach((doc) => {
      users.push(doc.data())
    })

    Logger.info(NAMESPACE, users.toString())

    return resp.status(200).json({
      data: users,
    })
  }

  public createUser = async (req: Request, resp: Response) => {
    try {
      const user: User = {
        name: req.body["name"],
        email: req.body["email"],
        createdAt: new Date(),
      }

      const newDocuemnt = await Firestore.collection(UserCollection).add(user)
      resp.status(200).json({
        message: "successful",
        data: newDocuemnt.id,
      })
    } catch (err) {
      resp.status(400).json(`can't create ${err}`)
    }
  }
}

export default UserController
