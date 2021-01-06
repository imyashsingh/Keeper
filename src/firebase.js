import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPL_A-YmjtFultmWP3j8aP11wxncklZOM",
  authDomain: "keeper-app-react.firebaseapp.com",
  projectId: "keeper-app-react",
  storageBucket: "keeper-app-react.appspot.com",
  messagingSenderId: "926707906409",
  appId: "1:926707906409:web:6f76c05832002ee5d96ff8",
  measurementId: "G-73N9MN7EBX",
});

const db = firebaseApp.firestore();
export default db;
