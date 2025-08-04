// Injecte le header
fetch('/portfolio/commun/header.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('afterbegin', data);
  })
  .then(() => {
    // Bouton Burger
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    // Gestion du Thème
    const themeStylesheet = document.getElementById('themeStylesheet');
    const lightStylesheet = document.getElementById('lightStylesheet');
    const themeButton = document.getElementById('themeButton');
    const themeOptions = document.getElementById('themeOptions');
    const optionElements = document.querySelectorAll('.option');

    function applyTheme(theme) {
      const isLight = theme === 'light';

      lightStylesheet.disabled = !isLight;
      themeStylesheet.disabled = isLight;

      themeButton.textContent = isLight ? 'Clair' : 'Sombre';
      localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme === 'light' ? 'light' : 'dark');

    themeButton?.addEventListener('click', () => {
      themeOptions.classList.toggle('show');
    });

    optionElements.forEach(option => {
      option.addEventListener('click', () => {
        const selectedTheme = option.dataset.value;
        applyTheme(selectedTheme);
        themeOptions.classList.remove('show');
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.custom-select')) {
        themeOptions.classList.remove('show');
      }
    });
  });
