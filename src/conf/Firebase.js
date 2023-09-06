// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmbU6oEz0bA8K_YDsf3EeOsIBiywAuYH8",
  authDomain: "hoomanfinder.firebaseapp.com",
  projectId: "hoomanfinder",
  storageBucket: "hoomanfinder.appspot.com",
  messagingSenderId: "541647056945",
  appId: "1:541647056945:web:83d22c65308219d28e6510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);