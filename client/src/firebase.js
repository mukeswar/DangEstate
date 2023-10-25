// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dang-estate.firebaseapp.com",
  projectId: "dang-estate",
  storageBucket: "dang-estate.appspot.com",
  messagingSenderId: "730572029992",
  appId: "1:730572029992:web:03e76da6b8df33debef51d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);