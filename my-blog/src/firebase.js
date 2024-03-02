// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "daily-people-blog.firebaseapp.com",
  projectId: "daily-people-blog",
  storageBucket: "daily-people-blog.appspot.com",
  messagingSenderId: "456288090333",
  appId: "1:456288090333:web:322bf492b97c95572c0334"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);