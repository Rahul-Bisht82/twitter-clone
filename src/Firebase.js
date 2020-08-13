import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGMsLGMmBiUvsEwVD0ltZ4PQNSEJQrj-Y",
  authDomain: "twitter-clone-265c1.firebaseapp.com",
  databaseURL: "https://twitter-clone-265c1.firebaseio.com",
  projectId: "twitter-clone-265c1",
  storageBucket: "twitter-clone-265c1.appspot.com",
  messagingSenderId: "892931315223",
  appId: "1:892931315223:web:fa2da5671bef872b5e2e52",
  measurementId: "G-FPGM78MZ3Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
