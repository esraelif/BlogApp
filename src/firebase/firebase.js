// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCu6ZtydZ5DsQJmb8sYopV0QViQYS3WtYA",
    authDomain: "blogapp-elif-76832.firebaseapp.com",
    projectId: "blogapp-elif-76832",
    storageBucket: "blogapp-elif-76832.appspot.com",
    messagingSenderId: "1026700060961",
    appId: "1:1026700060961:web:db9271a54c023ac852b660",
    measurementId: "G-DZ2W8860LY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const storage = getStorage()
export const db = getFirestore(app)
