/* eslint-disable no-unused-vars */
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-PzBYGNDCM2N3LyC7MBtIxDuo1dze2eI",
  authDomain: "fbreactjs-24.firebaseapp.com",
  projectId: "fbreactjs-24",
  storageBucket: "fbreactjs-24.appspot.com",
  messagingSenderId: "545035528063",
  appId: "1:545035528063:web:73878473b6b1e284115c4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth,db};