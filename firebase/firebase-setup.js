// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "@env";

const firebaseConfig = {
  apiKey: "AIzaSyANmX_ykuw-kZuA0enWHrhVmBHsaVxmdI8",
  authDomain: "assignment2-b7632.firebaseapp.com",
  projectId: "assignment2-b7632",
  storageBucket: "assignment2-b7632.appspot.com",
  messagingSenderId: "913857145996",
  appId: "1:913857145996:web:ae26d1ab3bbd6e5c491fa9",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
