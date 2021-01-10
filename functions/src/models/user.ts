import firebase from "firebase/app";
import "firebase/database";

const databaseRef = firebase.database().ref();

export const userDocument = databaseRef.child("user");
