document.addEventListener('DOMContentLoaded', () => {
  const themeStylesheet = document.getElementById('themeStylesheet');
  const lightStylesheet = document.getElementById('lightStylesheet');
  const themeButton = document.getElementById('themeButton');
  const themeOptions = document.getElementById('themeOptions');
  const optionElements = document.querySelectorAll('.option');

  function applyTheme(theme) {
    const isLight = theme === 'light';

    lightStylesheet.disabled = !isLight;
    themeStylesheet.disabled = isLight;

    // Met à jour le texte du bouton
    themeButton.textContent = isLight ? 'Clair' : 'Sombre';

    // Sauvegarde le thème
    localStorage.setItem('theme', theme);
  }

  // Appliquer le thème au chargement
  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme === 'light' ? 'light' : 'dark');

  // Ouvre/ferme le menu de sélection
  themeButton?.addEventListener('click', () => {
    themeOptions.classList.toggle('show');
  });

  // Sélection d’un thème via le menu
  optionElements.forEach(option => {
    option.addEventListener('click', () => {
      const selectedTheme = option.dataset.value;
      applyTheme(selectedTheme);
      themeOptions.classList.remove('show');
    });
  });

  // Ferme le menu si on clique en dehors
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select')) {
      themeOptions.classList.remove('show');
    }
  });
});