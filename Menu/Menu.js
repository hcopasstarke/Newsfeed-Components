const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
};
menuButton.addEventListener('click', toggleMenu);