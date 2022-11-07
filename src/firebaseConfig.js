import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBmFBpz4YhIf7ohSKxD2EKHMI87zZ7M-M",
  authDomain: "blog-code-along-11-6.firebaseapp.com",
  projectId: "blog-code-along-11-6",
  storageBucket: "blog-code-along-11-6.appspot.com",
  messagingSenderId: "374105721566",
  appId: "1:374105721566:web:8bfdd20823adcbe41a104f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
