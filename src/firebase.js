
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAJRlqEx8bEYDhgRB6qLZIWK-KO-WRPWd8",
  authDomain: "chat-app-5bad4.firebaseapp.com",
  projectId: "chat-app-5bad4",
  storageBucket: "chat-app-5bad4.appspot.com",
  messagingSenderId: "60540181306",
  appId: "1:60540181306:web:e72c9b336e785cfb584e03",
  measurementId: "G-JM4QEJ6PT4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider= new GoogleAuthProvider;
export const db= getFirestore()
