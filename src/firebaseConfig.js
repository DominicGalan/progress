// filepath: c:\Users\Yohann\Desktop\Soft\progress\src\firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASC6CEvCGm8k_STXMDeNJgUjoAjYoRnls",
  authDomain: "gamified-group-study-arena.firebaseapp.com",
  projectId: "gamified-group-study-arena",
  storageBucket: "gamified-group-study-arena.firebasestorage.app",
  messagingSenderId: "924065821438",
  appId: "1:924065821438:web:30a7c2560a0f16480a2baf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Firebase Authentication
const auth = getAuth(app);

export { db, auth };
