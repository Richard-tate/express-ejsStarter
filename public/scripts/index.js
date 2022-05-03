const navBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header_menu');

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
})