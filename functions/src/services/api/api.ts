import * as Types from "./api.types"
import {Logger} from "../../config/logger"
import {Firestore} from "../../helpers/firebase"

const NAMESPACE = "API"

export const UserCollection = "users"

export class Api {
  /**
   * Get All Users
   */
  async getAllUser(): Promise<Types.UsersResult> {
    const resultUsers: Types.User[] = []
    try {
      const userQuerySnapshot = await Firestore.collection(UserCollection)
          .orderBy("createdAt", "desc")
          .get()
      const rawData = userQuerySnapshot.docs.map((doc) => doc.data())
      rawData.map((val) => {
        resultUsers.push({
          id: val.id,
          name: val.name,
          email: val.email,
          createdAt: val.createdAt,
        })
        return resultUsers
      })
      console.log(rawData)

      Logger.info(NAMESPACE + " get all users", JSON.stringify(resultUsers))

      return {data: resultUsers}
    } catch (err) {
      return {kind: "not-found"}
    }
  }
  /**
   * Create User
   */

  async createUser(userObj: Types.User): Promise<Types.UserResult> {
    try {
      const newDocuemnt = await Firestore.collection(UserCollection)
          .add(userObj)
      return {data: userObj}
    } catch (err) {
      return {kind: "forbidden"}
    }
  }
}
