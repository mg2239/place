import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBb7OI6hhSbfF9dEVvcOaJVs5mL8TnKt-o",
  authDomain: "place-ce4b8.firebaseapp.com",
  databaseURL: "https://place-ce4b8-default-rtdb.firebaseio.com",
  projectId: "place-ce4b8",
  storageBucket: "place-ce4b8.appspot.com",
  messagingSenderId: "467405356346",
  appId: "1:467405356346:web:ee2e16a4592e53fbbd2403",
  measurementId: "G-J9FX1C045J",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
