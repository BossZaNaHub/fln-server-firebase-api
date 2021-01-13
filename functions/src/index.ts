import * as functions from "firebase-functions"
import App from "./app"

const func = functions.region("asia-east2").https
const app = new App()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true})
//   response.send("Hello from Firebase!")
// })
export const server = func.onRequest(app.app)
