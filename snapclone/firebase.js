import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC98r9uH73Ccg29AxKxilM-Esrw4qxyRiY",
  authDomain: "snapchat-clone-26282.firebaseapp.com",
  projectId: "snapchat-clone-26282",
  storageBucket: "snapchat-clone-26282.appspot.com",
  messagingSenderId: "368058762311",
  appId: "1:368058762311:web:a97affe937307a40431d62",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage;

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
