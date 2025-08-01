document.getElementById("download-cv").addEventListener("click", () => {
    const main = document.querySelector("main");
    const clone = main.cloneNode(true); // clone profond du <main>

    // Supprime les éléments marqués .no-print du clone
    clone.querySelectorAll('.no-print').forEach(el => el.remove());

    // Création d’un conteneur temporaire
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "-9999px"; // hors écran
    container.appendChild(clone);
    document.body.appendChild(container);

    const opt = {
        margin: 0.5,
        filename: 'mon-cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(clone).save().then(() => {
        // Nettoyage du DOM
        document.body.removeChild(container);
    });
});