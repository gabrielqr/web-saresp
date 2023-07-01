const homeController = document.getElementById("home");
if (homeController) {
  homeController.addEventListener("click", async () => {
    console.log("Botão 'home' clicado");

    // Redirecione para a nova página "index.html"
    window.location.href = "index.html";
  });
}

const loginController = document.getElementById("login");
if (loginController) {
  loginController.addEventListener("click", async () => {
    console.log("Botão 'login' clicado");

    // Redirecione para a nova página "index.html"
    window.location.href = "login.html";
  });
}