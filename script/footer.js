// ---------------------------
//     Footer
// ---------------------------

fetch('/portfolio/commun/footer.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
  });