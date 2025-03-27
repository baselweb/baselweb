// header.js
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  
  if (header) {
    // Make the header visible and slide it down
    header.style.opacity = 1;   // Fade in
    header.style.transform = 'translateY(0)';  // Slide from the top
  }
});
