// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tender-management-system-1a9b6.firebaseapp.com",
  projectId: "tender-management-system-1a9b6",
  storageBucket: "tender-management-system-1a9b6.appspot.com",
  messagingSenderId: "363775980447",
  appId: "1:363775980447:web:f8617e5f2e7c70bf21c3aa",
  measurementId: "G-EKHVYQ4YWX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
