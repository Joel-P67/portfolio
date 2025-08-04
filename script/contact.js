// -----------------------------------------
//  Gestion de l'envoie du message
// -----------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-formulaire");
  const modal = document.getElementById("form-modal");
  const modalMessage = document.getElementById("form-modal-message");
  const modalClose = document.getElementById("form-modal-close");

  modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Fermer en cliquant en dehors de la fenêtre popup
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // Fermer avec la touche Échap
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.add("hidden");
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xldlwznw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        modalMessage.innerHTML = "<strong>✅ Merci, votre message a bien été envoyé !</strong>";
        modal.classList.remove("hidden");
        form.reset();
      } else {
        throw new Error("Erreur lors de l'envoi.");
      }
    } catch (error) {
      modalMessage.innerHTML = "<strong>❌ Une erreur est survenue. Merci de réessayer.</strong>";
      modal.classList.remove("hidden");
    }
  });
});