import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxKs2df-LXHedgaKWjeINYKafXtNX5h9k",
  authDomain: "ecommerce-guitarras.firebaseapp.com",
  projectId: "ecommerce-guitarras",
  storageBucket: "ecommerce-guitarras.appspot.com",
  messagingSenderId: "1089824690384",
  appId: "1:1089824690384:web:5c178504f5bf43206bced5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)