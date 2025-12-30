import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCj22Jeba63cE210e1KsvS_cYtLCXO8kxs",
  authDomain: "nikos-world.firebaseapp.com",
  projectId: "nikos-world",
  storageBucket: "nikos-world.firebasestorage.app",
  messagingSenderId: "695501211466",
  appId: "1:695501211466:web:38c258f3b17588d88223b3",
  measurementId: "G-XSDCMLERKR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);