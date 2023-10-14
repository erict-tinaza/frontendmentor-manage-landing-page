const hamburgerMenu = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
})