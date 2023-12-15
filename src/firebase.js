// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL_Aa17srwih8tgS115Xv0WS-azvkpqQQ",
  authDomain: "nextjs13-firebase-challenge2.firebaseapp.com",
  projectId: "nextjs13-firebase-challenge2",
  storageBucket: "nextjs13-firebase-challenge2.appspot.com",
  messagingSenderId: "972370769148",
  appId: "1:972370769148:web:3f9e7c2db84fe763001379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




export default db;