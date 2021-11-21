// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYe3BwTjnvxSBPnrQAKdRZwEuLNlRPZGI",
  authDomain: "unearnedconfidence-f4d5b.firebaseapp.com",
  projectId: "unearnedconfidence-f4d5b",
  storageBucket: "unearnedconfidence-f4d5b.appspot.com",
  messagingSenderId: "66381613445",
  appId: "1:66381613445:web:196dcef7dcd72737c31cec",
  measurementId: "G-72NMMLKD4X"
};

// Initialize Firebasee
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
