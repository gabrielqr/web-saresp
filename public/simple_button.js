import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
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

async function getSchoolsBySearchTerm(searchTerm) {
  const schoolsRef = collection(db, "Escolas");
  const schoolsSearchQuery = query(schoolsRef, where("NOMESC", "==", searchTerm));
  return await getDocs(schoolsSearchQuery);
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
  var table = document.createElement("table");

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

  return table;
}

const rankingController = document.getElementById("rankings");
if (rankingController) {
  rankingController.addEventListener("click", async () => {
    console.log("Botão 'Rankings' clicado");
    let schoolsRanking = await getSchoolsRanked();
    
    // Crie a tabela
    let table = createTable(schoolsRanking);
  
    // Armazene os resultados no armazenamento local ou em uma variável global
    localStorage.setItem("rankingTable", table.outerHTML);
    
    // Redirecione para a nova página "ranking.html"
    window.location.href = "ranking.html";
  });
}

const searchController = document.getElementById("search");
const searchInput = document.querySelector(".search");

if (searchController && searchInput) {
  searchController.addEventListener("click", async () => {
    performSearch();
  });

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      performSearch();
    }
  });
}

async function performSearch() {
  const searchTerm = searchInput.value.trim();

  if (searchTerm !== "") {
    console.log("Botão 'Search' clicado");
    const searchResults = await getSchoolsBySearchTerm(searchTerm);
    let table = createTable(searchResults);

    console.log(table);
  
    // Armazene os resultados no armazenamento local ou em uma variável global
    localStorage.setItem("searchingTable", table.outerHTML);
    
    // Redirecione para a nova página "searching.html"
    window.location.href = "searching.html";

  }
}