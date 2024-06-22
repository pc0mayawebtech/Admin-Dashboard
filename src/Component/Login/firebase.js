// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore, collection, getDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpX7y5iIcCTFm8ZykQq_8y4CjZVGt9sJc",
  authDomain: "admin-dashboard-32224.firebaseapp.com",
  projectId: "admin-dashboard-32224",
  storageBucket: "admin-dashboard-32224.appspot.com",
  messagingSenderId: "47883157960",
  appId: "1:47883157960:web:6b82bb1d3ab4d8214200fd",
  measurementId: "G-0B0QNTPCM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const collectionReference = collection(db, 'Users')




export const auth = getAuth();
export default app;
