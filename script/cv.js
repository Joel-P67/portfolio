document.getElementById("download-cv").addEventListener("click", () => {
    const main = document.querySelector("main");
    const clone = main.cloneNode(true); // clone profond du <main>

    // Supprimer les éléments marqués .no-print dans le clone
    clone.querySelectorAll('.no-print').forEach(el => el.remove());

    // Appliquer les classes de thème (dark/light) au clone si nécessaire
    clone.className = main.className;

    // Créer un conteneur temporaire avec les mêmes styles
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "-9999px"; // hors écran
    container.style.left = "0";
    container.style.width = "100%";
    container.style.zIndex = "-1"; // s'assurer qu'il n’interfère pas
    container.appendChild(clone);
    document.body.appendChild(container);

    // Attendre un petit délai pour que les styles se chargent
    setTimeout(() => {
        const opt = {
            margin: 0.5,
            filename: 'mon-cv.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(clone).save().then(() => {
            // Nettoyage du DOM
            document.body.removeChild(container);
        });
    }, 100); // délai minimal pour s'assurer que les styles sont appliqués
});