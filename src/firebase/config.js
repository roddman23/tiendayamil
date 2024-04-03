// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUVRuP5UlJvNNuJ5gtCuLdSDr58c9Rarg",
  authDomain: "malditos-alamos-shop.firebaseapp.com",
  projectId: "malditos-alamos-shop",
  storageBucket: "malditos-alamos-shop.appspot.com",
  messagingSenderId: "555983565033",
  appId: "1:555983565033:web:56524540b293881b01c078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };