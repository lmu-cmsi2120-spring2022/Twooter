import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfVH0MtxruGKPYMc3Y8CJWX6XrLzm6rhs",
  authDomain: "twooter-88835.firebaseapp.com",
  projectId: "twooter-88835",
  storageBucket: "twooter-88835.appspot.com",
  messagingSenderId: "448456032623",
  appId: "1:448456032623:web:80ee8a9479cd6c5226e89a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
