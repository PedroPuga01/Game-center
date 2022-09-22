import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBjFagRa2Wbhf58ExzQgN7ii71M5-MPv0c",
  authDomain: "react-coder-f9cff.firebaseapp.com",
  projectId: "react-coder-f9cff",
  storageBucket: "react-coder-f9cff.appspot.com",
  messagingSenderId: "852816800371",
  appId: "1:852816800371:web:279ea50396b4879a675806"
};

const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)