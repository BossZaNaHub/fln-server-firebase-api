import firebase from "firebase/app";

interface Config {
  apiKey: string
}

const config: Config = {
  apiKey: process.env.apikey || "",
};

firebase.initializeApp(config);

export default firebase;
