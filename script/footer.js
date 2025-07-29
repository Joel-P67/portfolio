// Injecte le footer à la fin du body
fetch('commun/footer.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
  });
