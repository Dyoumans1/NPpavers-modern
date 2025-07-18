// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Form submission (you'll need to connect this to a backend service)
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your inquiry! We will contact you within 24 hours.');
  this.reset();
});
