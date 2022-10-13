import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBXbC9pPpdvuGhUHS4mg4dDWmxrLPs9zrY",
  authDomain: "house-app-2c522.firebaseapp.com",
  projectId: "house-app-2c522",
  storageBucket: "house-app-2c522.appspot.com",
  messagingSenderId: "819240083766",
  appId: "1:819240083766:web:4d528366d4a8de48979397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()