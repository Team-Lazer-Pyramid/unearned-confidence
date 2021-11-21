// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy4U5s_jVii_UIDA8mkAD0UoY0c5mFz2g",
  authDomain: "unurfdcompetence.firebaseapp.com",
  projectId: "unurfdcompetence",
  storageBucket: "unurfdcompetence.appspot.com",
  messagingSenderId: "187441516198",
  appId: "1:187441516198:web:b9438f7726a91227beae67",
  measurementId: "G-2S9EME9RKW"
};

// Initialize Firebasee
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
