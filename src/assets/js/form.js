const form = document.getElementById('form');

const nameField = document.getElementById('name');
const emailField = document.getElementById('email-book');
const phoneField = document.getElementById('phone');
const changeForm = document.getElementById('form-content');
const sendFormSuccess = document.getElementById('form-success');
const returnForm = document.getElementById('return-form');

form.addEventListener('input', onInputChange);
form.addEventListener('submit', onHandleSubmit);

phoneField.addEventListener('blur', onInputChange);

function onInputChange({ target }) {
  if (target.hasAttribute('data-reg')) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  let isValid = true;
  const inputValue = el.value.trim();

  const inputReg = el.getAttribute('data-reg');
  const reg = new RegExp(inputReg);

  if (reg.test(inputValue)) {
    setSuccess(el);
  } else {
    setError(el);
    isValid = false;
  }
  return isValid;
}

function onHandleSubmit(e) {
  e.preventDefault();
  let isNameValid = inputCheck(nameField);
  let isEmailValid = inputCheck(emailField);
  let isPhoneValid = inputCheck(phoneField);
  let isFormValid = isNameValid && isEmailValid && isPhoneValid;
  if (isFormValid) {
    changeFormSuccess();
    e.currentTarget.reset();
  }
}

function setError(field) {
  field.classList.add('error__input');
  field.classList.remove('success__input');
}

function setSuccess(field) {
  field.classList.add('success__input');
  field.classList.remove('error__input');
}

function changeFormSuccess() {
  changeForm.classList.add('is-hidden');
  sendFormSuccess.classList.remove('is-hidden');
}
function returnFormOutSuccess() {
  changeForm.classList.remove('is-hidden');
  sendFormSuccess.classList.add('is-hidden');
}

returnForm.addEventListener('click', returnFormOutSuccess);
