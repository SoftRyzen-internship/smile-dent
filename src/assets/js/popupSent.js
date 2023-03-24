const sentModal = document.getElementById('sent-modal');
const closeSentBtn = document.getElementById('close-sent-btn');
const bodySent = document.querySelector('body');

closeSentBtn.addEventListener('click', event => {
  event.preventDefault();
  addIshiddenSocial();
});

function handleKeySocial(e) {
  if (!sentModal.classList.contains('is-hidden')) {
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
  sentModal.classList.add('is-hidden');
  bodySent.classList.remove('scroll-hidden');
}
export function openModalSentForm() {
  sentModal.classList.remove('is-hidden');
  bodySent.classList.add('scroll-hidden');
}
document.addEventListener('keydown', handleKeySocial);
sentModal.addEventListener('mousedown', handleCloseSocial);
closeSentBtn.addEventListener('click', addIshiddenSocial);
