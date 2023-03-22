const socialModal = document.getElementById('social-modal');
const closeSocialBtn = document.getElementById('close-social-btn');
const openPopupSocial = document.querySelectorAll('.footer-social__button');
const bodySocial = document.querySelector('body');

openPopupSocial.forEach(function (social) {
  social.addEventListener('click', e => {
    e.preventDefault();
    openModalSocial();
  });
});

closeSocialBtn.addEventListener('click', event => {
  event.preventDefault();
  addIshiddenSocial();
});

function handleKeySocial(e) {
  if (!socialModal.classList.contains('is-hidden')) {
    if (e.key === 'Escape') {
      addIshiddenSocial();
    }
  }
  return;
}

function handleCloseSocial(e) {
  if (e.target === e.currentTarget) {
    addIshiddenSocial();
  }
  return;
}
function addIshiddenSocial() {
  socialModal.classList.add('is-hidden');
  bodySocial.classList.remove('scroll-hidden');
}
function openModalSocial() {
  socialModal.classList.remove('is-hidden');
  bodySocial.classList.add('scroll-hidden');
}
document.addEventListener('keydown', handleKeySocial);
socialModal.addEventListener('mousedown', handleCloseSocial);
closeSocialBtn.addEventListener('click', addIshiddenSocial);
