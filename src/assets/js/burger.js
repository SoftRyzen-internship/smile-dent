const btn = document.querySelector('.nav__burger');
const menu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');

btn.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu--opened');
    btn.classList.toggle('nav__burger-opened');
    if (document.body.style.overflow !== 'hidden') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    
})