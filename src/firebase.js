import {getAuth  } from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_KEY,
  authDomain: "goldinc-7ed2f.firebaseapp.com",
  projectId: "goldinc-7ed2f",
  storageBucket: "goldinc-7ed2f.firebasestorage.app",
  messagingSenderId: "336738370359",
  appId: "1:336738370359:web:27be8e3965dac5215dd0b2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const db = getFirestore(app);