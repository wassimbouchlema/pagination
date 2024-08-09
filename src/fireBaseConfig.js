// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfUiMYMK_mX2MEbOISAp8MQ-qyG4klCu0",
  authDomain: "pagination-189bd.firebaseapp.com",
  projectId: "pagination-189bd",
  storageBucket: "pagination-189bd.appspot.com",
  messagingSenderId: "175480050980",
  appId: "1:175480050980:web:2277e175288418f4df0fb1",
  measurementId: "G-GC066G95YY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
