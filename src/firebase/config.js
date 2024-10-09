// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh04MLWl1FuhM99oa6Oe4086pfNdFnuRc",
  authDomain: "myblog-project-9d170.firebaseapp.com",
  projectId: "myblog-project-9d170",
  storageBucket: "myblog-project-9d170.appspot.com",
  messagingSenderId: "1053276372414",
  appId: "1:1053276372414:web:e5268c200de093c5e00def",
  measurementId: "G-BYLRL3XGNH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


