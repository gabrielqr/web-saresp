import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js'
import { collection, getDocs, getFirestore, orderBy, query } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyCy5Pa_k7SaCooNjkLJWG_c0bg07pHS8FQ",
  authDomain: "saresp-web.firebaseapp.com",
  projectId: "saresp-web",
  storageBucket: "saresp-web.appspot.com",
  messagingSenderId: "1045309326364",
  appId: "1:1045309326364:web:b9ececf619ff421fbd8bd9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const schoolsRef = collection(db, "Escolas");
const schoolsRankingQuery = query(schoolsRef, orderBy('medprof', 'desc'));
const schoolsRanking = await getDocs(schoolsRankingQuery);

document.getElementById("sobreNos").addEventListener("click", () => {
  console.log("Botão 'Sobre nós' clicado");
});

document.getElementById("rankings").addEventListener("click", () => {
  console.log("Botão 'Rankings' clicado");
  schoolsRanking.forEach(school => {
    console.log(school.data());
  })
});
