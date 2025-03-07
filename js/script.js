window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const homepage = document.querySelector(".homepage");

  setTimeout(() => {
    preloader.style.display = "none"; // Masque le preloader
    homepage.style.display = "flex"; // Affiche la page d'accueil
  }, 3000); // Le preloader disparaît après 3 secondes
});
