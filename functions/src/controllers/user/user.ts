import {Request, Response} from "express"
import {Logger} from "../../config/logger"
import {Api} from "../../services"

const NAMESPACE = "User Controller"

class UserController {
  public getPing(req: Request, resp: Response) {
    return resp.status(200).json({
      message: "pong",
    })
  }

  public getAllUser = async (req: Request, resp: Response) => {
    const getUser = new Api()

    Logger.info(NAMESPACE, " call get all user function")

    await getUser.getAllUser().then((userResult) => {
      return resp.status(200).json(userResult)
    })

    return resp.status(400).json("can't get user")
  }

  public createUser = async (req: Request, resp: Response) => {
    // try {
    //   const user: User = {
    //     name: req.body["name"],
    //     email: req.body["email"],
    //     createdAt: new Date(),
    //   }

    //   const newDocuemnt =
    // await Firestore.collection(UserCollection).add(user)
    //   resp.status(200).json({
    //     message: "successful",
    //     data: newDocuemnt.id,
    //   })
    // } catch (err) {
    //   resp.status(400).json(`can't create ${err}`)
    // }
  }

  public uploadProfile = async (req: Request, resp: Response) => {
  }
}

export default UserController
