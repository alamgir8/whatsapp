import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-1xth5inJVujttfITRqCi_cCKAzGqttg",
  authDomain: "whatsapp-ab.firebaseapp.com",
  projectId: "whatsapp-ab",
  storageBucket: "whatsapp-ab.appspot.com",
  messagingSenderId: "407968362005",
  appId: "1:407968362005:web:ed915cee7b96ac2998e81c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {auth, db, googleProvider}