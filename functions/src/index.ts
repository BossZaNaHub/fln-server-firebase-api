import * as functions from "firebase-functions";
import {app} from "./app";

// import {FirebaseDatabase} from "./pkg/firebase/database";

// const db = new FirebaseDatabase();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
export const server = functions.https.onRequest(app.start);