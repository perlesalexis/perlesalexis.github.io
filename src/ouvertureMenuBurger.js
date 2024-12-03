// ouvertureMenuBurger.js
const hamburgerBtn = document.getElementById('hamburger-btn');
const menu = document.getElementById('menu');

// Écouteur d'événement pour gérer l'ouverture/fermeture du menu burger
hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('open'); // Ajoute ou enlève la classe "open"
});
