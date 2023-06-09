// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ4Gt218EBBI_7KODUGN2m35Jp_TroTCk",
  authDomain: "realtor-clone-7676b.firebaseapp.com",
  projectId: "realtor-clone-7676b",
  storageBucket: "realtor-clone-7676b.appspot.com",
  messagingSenderId: "531110151074",
  appId: "1:531110151074:web:81b32cfc2314f5d009a8fb"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()