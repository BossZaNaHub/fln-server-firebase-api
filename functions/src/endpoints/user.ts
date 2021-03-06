import {Application, Router} from "express"
import UserController from "../controllers/user/user"

class UserRoute {
    public userController: UserController = new UserController()
    public router: Router = Router()

    public routes(api: Application): any {
      this.router.get("/ping", this.userController.getPing)
      this.router.get("/", this.userController.getAllUser)
      this.router.post("/create", this.userController.createUser)

      api.use("/users", this.router)
    }
}

export default UserRoute
