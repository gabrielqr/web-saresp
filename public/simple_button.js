import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCy5Pa_k7SaCooNjkLJWG_c0bg07pHS8FQ",
  authDomain: "saresp-web.firebaseapp.com",
  projectId: "saresp-web",
  storageBucket: "saresp-web.appspot.com",
  messagingSenderId: "1045309326364",
  appId: "1:1045309326364:web:b9ececf619ff421fbd8bd9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function getSchoolsRanked() {
  const schoolsRef = collection(db, "Escolas");
  const schoolsRankingQuery = query(schoolsRef, orderBy("medprof", "desc"));
  return await getDocs(schoolsRankingQuery);
}

function createCell(row, content, cellTag = "td") {
  let cell = document.createElement(cellTag);
  cell.textContent = content;
  row.appendChild(cell);
}

function createTableHeader(table, headers) {
  let tableHead = document.createElement("thead");

  let headRow = document.createElement("tr");
  headers.forEach((header) => {
    createCell(headRow, header, "th");
  });
  tableHead.appendChild(headRow);

  table.appendChild(tableHead);
}

function createTable(tableData) {
  var table = document.getElementById("rankingTable");

  createTableHeader(table, ["Nome", "Série/Ano", "Média"]);

  var tableBody = document.createElement("tbody");
  tableData.forEach((dataRow) => {
    var row = document.createElement("tr");

    var data = dataRow.data();

    createCell(row, data["NOMESC"]);
    createCell(row, data["SERIE_ANO"]);
    createCell(row, data["medprof"]);

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
}

document.getElementById("sobreNos").addEventListener("click", () => {
  console.log("Botão 'Sobre nós' clicado");
});

document.getElementById("rankings").addEventListener("click", async () => {
  console.log("Botão 'Rankings' clicado");
  let schoolsRanking = await getSchoolsRanked();
  createTable(schoolsRanking);
});
