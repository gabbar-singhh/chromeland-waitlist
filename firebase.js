// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBDiWZDxbjTUrqRCZdn-ir-deYck5BSX0A",
  authDomain: "chromeland-in.firebaseapp.com",
  projectId: "chromeland-in",
  storageBucket: "chromeland-in.appspot.com",
  messagingSenderId: "743420273894",
  appId: "1:743420273894:web:a6e3a7b6dbd882a3804727",
  measurementId: "G-MGQLFSLEBL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
