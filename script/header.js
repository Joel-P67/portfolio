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

    // select thème - custom select
    const button = document.getElementById('themeButton');
    const options = document.getElementById('themeOptions');
    const optionItems = options.querySelectorAll('.option');

    button.addEventListener('click', () => {
      options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });

    optionItems.forEach(option => {
      option.addEventListener('click', () => {
        const theme = option.dataset.value;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        const darkLink = document.querySelector('link[href*="dark.css"]');
        const lightLink = document.querySelector('link[href*="light.css"]');

        if (theme === 'dark') {
          darkLink.disabled = false;
          lightLink.disabled = true;
          button.textContent = 'Thème : Sombre';
        } else {
          darkLink.disabled = true;
          lightLink.disabled = false;
          button.textContent = 'Thème : Clair';
        }

        options.style.display = 'none';
      });
    });
  });