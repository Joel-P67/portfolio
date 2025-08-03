// Injecte le header
fetch('/portfolio/commun/header.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('afterbegin', data);
  })
  .then(() => {
    // Tout le script du header DOIT être lancé ici, une fois le DOM du header injecté

    // Bouton Burger
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });