// Toggle Dark Mode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Display alert on successful form submission (for demonstration)
// Remove e.preventDefault() if you want the form to actually submit to Formspree
document.getElementById('contact-form').addEventListener('submit', function(e) {
  // Uncomment next line to prevent actual submission during testing:
  // e.preventDefault();
  alert("Your message has been sent successfully!");
});