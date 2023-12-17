// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm0eWpxM_L9MikEuoX4yBxSAN9u_LI2rk",
  authDomain: "nextjs13-firebase-challe-e9c73.firebaseapp.com",
  projectId: "nextjs13-firebase-challe-e9c73",
  storageBucket: "nextjs13-firebase-challe-e9c73.appspot.com",
  messagingSenderId: "925988158289",
  appId: "1:925988158289:web:f4eda321c67485d3f6b170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




export default db;