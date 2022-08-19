// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Firebase Authentication feature
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcwiPI2W3HnkIKeGhyPFp1MRMEc6N1kpg",
  authDomain: "react-firebase-auth-1b8d6.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-1b8d6-default-rtdb.firebaseio.com",
  projectId: "react-firebase-auth-1b8d6",
  storageBucket: "react-firebase-auth-1b8d6.appspot.com",
  messagingSenderId: "228114482099",
  appId: "1:228114482099:web:9a0766aa1e294fe98fc1c6",
  measurementId: "G-ECCNV0W292",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the authentication feature with the initialized app
export const auth = getAuth(app);
export const db = getFirestore(app);
