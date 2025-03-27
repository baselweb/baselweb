window.addEventListener('DOMContentLoaded', (event) => {

  // Fetch the header and footer dynamically and insert them
  fetch('html/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      // Call function to initialize header-specific JavaScript after it loads
      initializeHeaderJS();
    })
    .catch(error => console.error('Error loading header:', error));

  fetch('html/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
      // Call function to initialize footer-specific JavaScript after it loads
      initializeFooterJS();
    })
    .catch(error => console.error('Error loading footer:', error));
  
  // Function to initialize Header JavaScript
  function initializeHeaderJS() {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
      });
    }
  }

  // Function to initialize Footer JavaScript
  function initializeFooterJS() {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
      backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

});
