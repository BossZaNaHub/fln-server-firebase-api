import {Application} from "express"
import UserRoute from "./user"

class Routes {
    public userRouter:UserRoute = new UserRoute()

    constructor(api: Application) {
      this.initRouter(api)
    }

    public initRouter(api: Application): void {
      this.userRouter.routes(api)
    }
}

export default Routes
