// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-7a6a3.firebaseapp.com",
  projectId: "mern-auth-7a6a3",
  storageBucket: "mern-auth-7a6a3.appspot.com",
  messagingSenderId: "289419270819",
  appId: "1:289419270819:web:46e59042a3d729e160fd16"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);