// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   
    apiKey: "AIzaSyDYAZaYNj-m9zsdwEU42STroAlbIQhtHO8",
    authDomain: "coffee-store-82b59.firebaseapp.com",
    projectId: "coffee-store-82b59",
    storageBucket: "coffee-store-82b59.appspot.com",
    messagingSenderId: "807824511271",
    appId: "1:807824511271:web:d2336545aabe8a5f9ad902"
  };
  
  // apiKey:import.meta.env.VITE_apiKey,
   
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId


// Initialize Firebase
export const app = initializeApp(firebaseConfig);