// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbGRCQe2fe4Gz4tE01xEaoJpCV4Bn2c4I",
  authDomain: "realtor-clone-7676b.firebaseapp.com",
  projectId: "realtor-clone-7676b",
  storageBucket: "realtor-clone-7676b.appspot.com",
  messagingSenderId: "531110151074",
  appId: "1:531110151074:web:3729f41616dc4a9409a8fb"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()