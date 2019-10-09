import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAj27JVSZYpxyWRn_f6Gc1cutwEh4gQmUc",
  authDomain: "crwn-clothing-d5017.firebaseapp.com",
  databaseURL: "https://crwn-clothing-d5017.firebaseio.com",
  projectId: "crwn-clothing-d5017",
  storageBucket: "",
  messagingSenderId: "722953769597",
  appId: "1:722953769597:web:4461697b5c285d3d7dd714",
  measurementId: "G-JM45HPLJDT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
