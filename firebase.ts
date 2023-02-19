import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2FvKwrzeiEXWxGUv5D6-jslYzuqgl690",
  authDomain: "signalclone-2ed76.firebaseapp.com",
  projectId: "signalclone-2ed76",
  storageBucket: "signalclone-2ed76.appspot.com",
  messagingSenderId: "529728844733",
  appId: "1:529728844733:web:466362977febfcf0e698d4",
  measurementId: "G-YQ9X3BFZY3",
};

let app;

if (initializeApp.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp();
}

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
