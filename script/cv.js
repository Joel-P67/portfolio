document.getElementById("download-cv").addEventListener("click", () => {
    const opt = {
        margin: 0.5,
        filename: 'mon-cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(document.body).save();
});