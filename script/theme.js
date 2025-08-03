document.addEventListener('DOMContentLoaded', () => {
  const themeStylesheet = document.getElementById('themeStylesheet');
  const lightStylesheet = document.getElementById('lightStylesheet');
  const themeButton = document.getElementById('themeButton');

  // Fonction de changement de thème
  function toggleTheme() {
    const isLight = lightStylesheet.disabled === false;

    if (isLight) {
      lightStylesheet.disabled = true;
      themeStylesheet.disabled = false;
      localStorage.setItem('theme', 'dark');
    } else {
      lightStylesheet.disabled = false;
      themeStylesheet.disabled = true;
      localStorage.setItem('theme', 'light');
    }
  }

  // Appliquer le thème sauvegardé au chargement
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    lightStylesheet.disabled = false;
    themeStylesheet.disabled = true;
  } else {
    // Par défaut sombre
    lightStylesheet.disabled = true;
    themeStylesheet.disabled = false;
    localStorage.setItem('theme', 'dark');
  }

  // Écouteur sur le bouton
  themeButton?.addEventListener('click', toggleTheme);
});