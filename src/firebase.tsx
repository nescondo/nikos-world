import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDtnsPy32Oqvwwi6e-_0JTGlQc50zPlnRo",
  authDomain: "nikos-world.firebaseapp.com",
  projectId: "nikos-world",
  storageBucket: "nikos-world.firebasestorage.app",
  messagingSenderId: "695501211466",
  appId: "1:695501211466:web:38c258f3b17588d88223b3",
  measurementId: "G-XSDCMLERKR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);