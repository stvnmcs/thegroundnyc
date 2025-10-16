// Select elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle menu open/close
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link =>
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// Close menu if clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});
