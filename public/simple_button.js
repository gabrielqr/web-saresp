import { schoolsRef } from "./configuration.js";
import {
  getDocs,
  orderBy,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js";

async function getSchoolsRanked() {
  const schoolsRankingQuery = query(schoolsRef, orderBy("medprof", "desc"));
  return await getDocs(schoolsRankingQuery);
}

async function getSchoolsByYear2019() {
  const schoolsRankingQuery = query(schoolsRef, where("ano", "==", 2019));
  return await getDocs(schoolsRankingQuery);
}

async function getSchoolsByYear2020() {
  const schoolsRankingQuery = query(schoolsRef, where("ano", "==", 2020));
  return await getDocs(schoolsRankingQuery);
}

async function getSchoolsByYear2021() {
  const schoolsRankingQuery = query(schoolsRef, where("ano", "==", 2021));
  return await getDocs(schoolsRankingQuery);
}

async function getSchoolsBySearchTerm(tipo, searchTerm) {
  const schoolsSearchQuery = query(schoolsRef, where(tipo, "==", searchTerm));
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

  createTableHeader(table, ["Nome", "Ano", "Região", "Série/Ano", "Média"]);

  var tableBody = document.createElement("tbody");
  tableData.forEach((dataRow) => {
    var row = document.createElement("tr");

    var data = dataRow.data();

    createCell(row, data["NOMESC"]);
    createCell(row, data["ano"]);
    createCell(row, data["CodRMet"]);
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

const yearController2019 = document.getElementById("2019");
if (yearController2019) {
  yearController2019.addEventListener("click", async () => {
    console.log("Botão '2019' clicado");
    let schoolsYear= await getSchoolsByYear2019();
    
    // Crie a tabela
    let table = createTable(schoolsYear);
  
    // Armazene os resultados no armazenamento local ou em uma variável global
    localStorage.setItem("rankingTable", table.outerHTML);
    
    // Redirecione para a nova página "ranking.html"
    window.location.href = "ranking.html";
  });
}

const yearController2020 = document.getElementById("2020");
if (yearController2020) {
  yearController2020.addEventListener("click", async () => {
    console.log("Botão '2020' clicado");
    let schoolsYear= await getSchoolsByYear2020();
    
    // Crie a tabela
    let table = createTable(schoolsYear);
  
    // Armazene os resultados no armazenamento local ou em uma variável global
    localStorage.setItem("rankingTable", table.outerHTML);
    
    // Redirecione para a nova página "ranking.html"
    window.location.href = "ranking.html";
  });
}

const yearController2021 = document.getElementById("2021");
if (yearController2021) {
  yearController2021.addEventListener("click", async () => {
    console.log("Botão '2021' clicado");
    let schoolsYear= await getSchoolsByYear2021();
    
    // Crie a tabela
    let table = createTable(schoolsYear);
  
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
  const dropdown = document.getElementById('dropdown');

  if (searchTerm !== "") {

      const selectedValue = dropdown.value;
      let schools = [];
      console.log("Entrou");

      if (selectedValue === 'opcao1') {
        // Opção 1 selecionada (Escola)
        const type = "NOMESC";
        schools = await getSchoolsBySearchTerm(type, searchTerm);
        
      } else if (selectedValue === 'opcao2') {
        // Opção 2 selecionada (Região)
        const type = "CodRMet";
        const convertTerm = parseInt(searchTerm, 10);
        schools = await getSchoolsBySearchTerm(type, convertTerm);
        
      } else if (selectedValue === 'opcao3') {
        
        const type = "SERIE_ANO";
        schools = await getSchoolsBySearchTerm(type,searchTerm);
        
      }
    
    let table = createTable(schools);

    console.log(table);
  
    // Armazene os resultados no armazenamento local ou em uma variável global
    localStorage.setItem("searchingTable", table.outerHTML);
    
    // Redirecione para a nova página "searching.html"
    window.location.href = "searching.html";

  }
}

const homeController = document.getElementById("home");
if (homeController) {
  homeController.addEventListener("click", async () => {
    console.log("Botão 'home' clicado");

    // Redirecione para a nova página "index.html"
    window.location.href = "index.html";
  });
}