import { TableCreator } from "./create_table.js";
import { FirebaseAdapter } from "./firebase_adapter.js";

const adapter = new FirebaseAdapter;
const tableCreator = new TableCreator;

//ranking escolar
const rankingController = document.getElementById("rankings");
if (rankingController) {
  rankingController.addEventListener("click", async () => {
    console.log("Botão 'Rankings' clicado");
    let schoolsRanking = await adapter.getSchoolsRanked();
    
    // Crie a tabela
    let table = await tableCreator.createTable(schoolsRanking);
  
    // Armazene os resultados no armazenamento local ou em uma variável global
    localStorage.setItem("rankingTable", table.outerHTML);
    
    // Redirecione para a nova página "ranking.html"
    window.location.href = "ranking.html";
  });
}

//ranking por ano
function createYearController(year) {
  const yearController = document.getElementById(year.toString());
  if (yearController) {
    yearController.addEventListener("click", async () => {
      console.log(`Botão '${year}' clicado`);
      let schoolsYear = await adapter.getSchoolsByYear(year);

      // Crie a tabela
      let table = tableCreator.createTable(schoolsYear);

      // Armazene os resultados no armazenamento local ou em uma variável global
      localStorage.setItem("rankingTable", table.outerHTML);

      // Redirecione para a nova página "ranking.html"
      window.location.href = "ranking.html";
    });
  }
}

createYearController(2019);
createYearController(2020);
createYearController(2021);

//campo da barra de pesquisa
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
        schools = await adapter.getSchoolsBySearchTerm(type, searchTerm);
        
      } else if (selectedValue === 'opcao2') {
        // Opção 2 selecionada (Região)
        const type = "CodRMet";
        const convertTerm = parseInt(searchTerm, 10);
        schools = await adapter.getSchoolsBySearchTerm(type, convertTerm);
        
      } else if (selectedValue === 'opcao3') {
        
        const type = "SERIE_ANO";
        schools = await adapter.getSchoolsBySearchTerm(type, searchTerm);
        
      }
    
    let table = await tableCreator.createTable(schools);

    // Armazene os resultados no armazenamento local ou em uma variável global
    localStorage.setItem("searchingTable", table.outerHTML);
    
    // Redirecione para a nova página "searching.html"
    window.location.href = "searching.html";

  }
}