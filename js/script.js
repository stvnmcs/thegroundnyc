const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  if(nav.style.right === '0px') {
    nav.style.right = '-100%';
  } else {
    nav.style.right = '0';
  }
});
