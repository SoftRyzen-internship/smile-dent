const formModal = document.getElementById('open-form-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const openModal = document.querySelectorAll('[data-book]');
const body = document.querySelector('body');

openModal.forEach(function (social) {
  social.addEventListener('click', e => {
    e.preventDefault();
    openModalForm();
  });
});

closeModalBtn.addEventListener('click', event => {
  event.preventDefault();
  addIshiddenModal();
});

function handleKeySocial(e) {
  if (!formModal.classList.contains('is-hidden')) {
    if (e.key === 'Escape') {
      addIshiddenModal();
    }
  }
  return;
}

function handleCloseSocial(e) {
  if (e.target === e.currentTarget) {
    addIshiddenModal();
  }
  return;
}
export function addIshiddenModal() {
  formModal.classList.add('is-hidden');
  body.classList.remove('scroll-hidden');
}
export function openModalForm() {
  formModal.classList.remove('is-hidden');
  body.classList.add('scroll-hidden');
}
document.addEventListener('keydown', handleKeySocial);
formModal.addEventListener('mousedown', handleCloseSocial);
closeModalBtn.addEventListener('click', addIshiddenModal);
