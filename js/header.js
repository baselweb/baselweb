// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', (event) => {
  // Fetch the header HTML content and inject it into the header div
  fetch('html/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      // After loading the header, add the click animation to the menu items
      setupMenuItemClickAnimation();
    })
    .catch(error => console.log('Error loading header:', error));

  // Set up animation for menu items
  function setupMenuItemClickAnimation() {
    const menuItems = document.querySelectorAll('#header ul li a');  // All menu items in the header
    menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
        // Prevent default link behavior
        e.preventDefault();
        
        // Add animation class
        item.classList.add('clicked');
        
        // Remove the class after animation duration to reset the state
        setTimeout(() => {
          item.classList.remove('clicked');
        }, 500); // The animation duration (500ms)
        
        // You can add custom behavior here, like navigating to the target link.
        // For example: window.location.href = item.href;
      });
    });
  }
});
