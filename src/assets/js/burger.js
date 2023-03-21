const btn = document.querySelector('.nav__burger');
const menu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.mobile-menu-overlay')

btn.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu--opened');
    btn.classList.toggle('nav__burger-opened');
    overlay.classList.toggle('mobile-menu-overlay--is-hidden');

    if (document.body.style.overflow !== 'hidden') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    
})