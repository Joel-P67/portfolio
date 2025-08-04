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

      // ⚠️ Ajout important ici : changer les images
      switchImages(theme);
      updateFavicons(theme);
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

    function switchImages(theme) {
      const images = document.querySelectorAll("img[data-theme-src]");
      images.forEach(img => {
        img.style.opacity = 0; // Démarre le fondu

        setTimeout(() => {
          const basePath = img.getAttribute("data-theme-src");
          img.src = `/portfolio/image/${theme}/${basePath}`;

          // Quand l’image est chargée, on la réaffiche
          img.onload = () => {
            img.style.opacity = 1;
          };

          // En cas d’erreur (image introuvable par exemple)
          img.onerror = () => {
            img.style.opacity = 1; // Réaffiche quand même (même cassée)
          };
        }, 150); // Petit délai pour laisser le temps de fondre
      });
    }

    function updateFavicons(theme) {
      const base = `/portfolio/image/${theme}/`;

      const favicon16 = document.getElementById("favicon16");
      const favicon32 = document.getElementById("favicon32");
      const appleTouch = document.getElementById("appleTouch");
      const android192 = document.getElementById("android192");
      const android512 = document.getElementById("android512");

      if (favicon16) favicon16.href = base + "favicon-16x16.png";
      if (favicon32) favicon32.href = base + "favicon-32x32.png";
      if (appleTouch) appleTouch.href = base + "apple-touch-icon.png";
      if (android192) android192.href = base + "android-chrome-192x192.png";
      if (android512) android512.href = base + "android-chrome-512x512.png";
    }

  });
