const emailInput = document.getElementById('email-input');
const emailForm = document.getElementById('email-form');
const errorMessage = document.getElementById('error-message');
const successModal = document.getElementById('success-modal');
const closeBtn = document.getElementById('close-btn');
const bodySubscribe = document.querySelector('body');

emailForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const regex = /^(?![.-])[A-Za-z0-9_]+(?<![.-])@[A-Za-z0-9]+(\.[A-Za-z]{2,}){1}(?<![.-])$/;

  const forbiddenChars = /[<>]/g;
  if (!email) {
    errorMessage.textContent = 'Email is required';
    emailInput.focus();
  } else if (forbiddenChars.test(email)) {
    errorMessage.textContent = 'Email contains forbidden characters';
    emailInput.focus();
  } else if (!regex.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address';
    emailInput.focus();
  } else {
    successModal.classList.remove('is-hidden');
    bodySubscribe.classList.add('scroll-hidden');
    emailInput.value = '';
  }
});

emailInput.addEventListener('input', event => {
  event.preventDefault();
  errorMessage.textContent = '';
});

closeBtn.addEventListener('click', event => {
  event.preventDefault();
  addIshidden();
});

function handleKeySubscribe(e) {
  if (!successModal.classList.contains('is-hidden')) {
    if (e.key === 'Escape') {
      addIshidden();
    }
  }
  return;
}

function handleCloseSocial(e) {
  if (e.target === e.currentTarget) {
    addIshidden();
  }
  return;
}
function addIshidden() {
  successModal.classList.add('is-hidden');
  bodySubscribe.classList.remove('scroll-hidden');
}
document.addEventListener('keydown', handleKeySubscribe);
successModal.addEventListener('mousedown', handleCloseSocial);
closeBtn.addEventListener('click', addIshidden);
