document.getElementById('download-pdf').addEventListener('click', () => {
    const element = document.getElementById('cv'); // Ton bloc principal
    const opt = {
        margin: 0.5,
        filename: 'CV_Joel_Petrazoller.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
});
