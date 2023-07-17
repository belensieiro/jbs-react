// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj9YDj7rzeq55DgO_KPc0lsPf9Wp53mSE",
  authDomain: "react-zapatillas.firebaseapp.com",
  projectId: "react-zapatillas",
  storageBucket: "react-zapatillas.appspot.com",
  messagingSenderId: "16239597697",
  appId: "1:16239597697:web:78386721b7318d72c79580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)