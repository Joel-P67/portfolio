// -----------------------------------------
//  Bouton d'impression / téléchargement CV
// -----------------------------------------

const modal = document.getElementById('print-modal');
const confirmBtn = document.getElementById('confirm-print');
const triggerBtn = document.getElementById('download-cv');

// Ouvrir le popup
triggerBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

// Confirmer l'impression
confirmBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  setTimeout(() => window.print(), 100);
});

// Fermer en cliquant en dehors de la fenêtre popup
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// Fermer avec la touche Échap
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
  }
});