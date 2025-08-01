document.getElementById('download-pdf').addEventListener('click', () => {
    const element = document.getElementById('cv');

    const opt = {
        margin: 0,
        filename: 'CV_Joel_Petrazoller.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, backgroundColor: null },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
});