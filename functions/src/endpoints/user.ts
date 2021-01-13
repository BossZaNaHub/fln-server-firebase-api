import {Application, Router} from "express"
import UserController from "../controllers/user/user"

class UserRoute {
    public userController: UserController = new UserController()
    public router: Router = Router()

    public routes(api: Application): any {
      this.router.get("/ping", this.userController.getPing)
      this.router.get("/users", this.userController.getUsers)

      api.use("/users", this.router)
    }
}

export default UserRoute
