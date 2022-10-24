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
  apiKey: "AIzaSyAw2uoUkfZ4caqV9uVLwxQNT4FP1NgNQCs",
  authDomain: "lunedesign.firebaseapp.com",
  projectId: "lunedesign",
  storageBucket: "lunedesign.appspot.com",
  messagingSenderId: "74735960289",
  appId: "1:74735960289:web:b9537c4acb1bf2f2ccf7a0",
  measurementId: "G-9P7Q747YD6"
};
// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)