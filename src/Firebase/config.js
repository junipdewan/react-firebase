// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAcPbOBP9js9jC6LGtm9ZjqwXjVpQjBQxM",
  authDomain: "react-firebase-fc06e.firebaseapp.com",
  databaseURL: "https://react-firebase-fc06e.firebaseio.com",
  projectId: "react-firebase-fc06e",
  storageBucket: "react-firebase-fc06e.appspot.com",
  messagingSenderId: "564100058598",
  appId: "1:564100058598:web:8c6ebd5ba04dc4faab1a27",
  measurementId: "G-GZNMEDXZPH"
};

firebase.initializeApp(config)

export default config;