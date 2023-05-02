// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: import.meta.env.VITE_APIKEY,
//  authDomain: import.meta.env.VITE_AUTHDOMAIN,
//  projectId: import.meta.env.VITE_PROJECTID,
//  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//  appId: import.meta.env.VITE_APPID,
//};

const firebaseConfig = {
  apiKey: "AIzaSyCPsNfEaaOsVV_gBopCvKF2GNaQP9xPZqA",
  authDomain: "food-network-17e81.firebaseapp.com",
  projectId: "food-network-17e81",
  storageBucket: "food-network-17e81.appspot.com",
  messagingSenderId: "1009462453070",
  appId: "1:1009462453070:web:c0c0e8b51bfbe3a246741f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
