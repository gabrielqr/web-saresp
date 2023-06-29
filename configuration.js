// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCy5Pa_k7SaCooNjkLJWG_c0bg07pHS8FQ",
//   authDomain: "saresp-web.firebaseapp.com",
//   projectId: "saresp-web",
//   storageBucket: "saresp-web.appspot.com",
//   messagingSenderId: "1045309326364",
//   appId: "1:1045309326364:web:b9ececf619ff421fbd8bd9"
// };

const firebaseConfig = {

  apiKey: "AIzaSyASN_bqZl-hyUdE2B07DRJd4VbenaPQlYA",
  authDomain: "engsoft-426.firebaseapp.com",
  projectId: "engsoft-426",
  storageBucket: "engsoft-426.appspot.com",
  messagingSenderId: "469850250369",
  appId: "1:469850250369:web:fd46e18dcaa55340c9c180"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);