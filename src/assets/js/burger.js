const btn = document.querySelector('.nav__burger');
const menu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.mobile-menu-overlay');

btn.addEventListener('click', () => {
  menu.classList.toggle('mobile-menu--opened');
  btn.classList.toggle('nav__burger-opened');
  overlay.classList.toggle('mobile-menu-overlay--is-hidden');

  if (document.body.style.overflow !== 'hidden') {
    console.log('true')
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

overlay.addEventListener('click', e => {
  if (!e.target.classList.contains('mobile-menu-overlay')) return;
  overlay.classList.add('mobile-menu-overlay--is-hidden');
  menu.classList.remove('mobile-menu--opened');
  btn.classList.remove('nav__burger-opened');
  document.body.style.overflow = '';
});

window.addEventListener('keydown', closeByEsc);

function closeByEsc(e) {
  if (e.code === 'Escape') {
    overlay.classList.add('mobile-menu-overlay--is-hidden');
    menu.classList.remove('mobile-menu--opened');
    btn.classList.remove('nav__burger-opened');
    document.body.style.overflow = '';
  }
}

menu.addEventListener('click', e => {
  if (e.target.closest('.nav__mobile-link')) {
    overlay.classList.add('mobile-menu-overlay--is-hidden');
    menu.classList.remove('mobile-menu--opened');
    btn.classList.remove('nav__burger-opened');
    document.body.style.overflow = '';
  }
});
