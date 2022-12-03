// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYMmxD3Z2aLhQ3Zw8-POeefSQcKQWhjUo",
  authDomain: "lune-4f6b9.firebaseapp.com",
  projectId: "lune-4f6b9",
  storageBucket: "lune-4f6b9.appspot.com",
  messagingSenderId: "816520660926",
  appId: "1:816520660926:web:060595b47dd65787ea9bef"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)