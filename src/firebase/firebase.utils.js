import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBAHsJR7w1xYm-5ipfqayVoOThBlCXrckM",
  authDomain: "crwn-clothing-1092a.firebaseapp.com",
  databaseURL: "https://crwn-clothing-1092a.firebaseio.com",
  projectId: "crwn-clothing-1092a",
  storageBucket: "crwn-clothing-1092a.appspot.com",
  messagingSenderId: "701704052700",
  appId: "1:701704052700:web:dc680acaf2717a07253919",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
