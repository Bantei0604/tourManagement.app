// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9aF-6Apg-g2VKI9b7YJcAWecZQTlD9NY",
  authDomain: "banteiisdoingfirebase.firebaseapp.com",
  projectId: "banteiisdoingfirebase",
  storageBucket: "banteiisdoingfirebase.appspot.com",
  messagingSenderId: "1057144359707",
  appId: "1:1057144359707:web:a9fb5b73f749b9499d61be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Auth
const auth = getAuth(app);

export { db, auth, GoogleAuthProvider, signInWithPopup };
