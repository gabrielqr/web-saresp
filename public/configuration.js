import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import {
  collection,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js";

export const firebaseConfig = {

  apiKey: "AIzaSyASN_bqZl-hyUdE2B07DRJd4VbenaPQlYA",
  authDomain: "engsoft-426.firebaseapp.com",
  projectId: "engsoft-426",
  storageBucket: "engsoft-426.appspot.com",
  messagingSenderId: "469850250369",
  appId: "1:469850250369:web:fd46e18dcaa55340c9c180"

};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const schoolsRef = collection(db, "Escolas");