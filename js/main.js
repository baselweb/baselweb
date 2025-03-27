// main.js
window.addEventListener('DOMContentLoaded', () => {
  // Fetch the header HTML content dynamically
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading header:', error);
    });
});
