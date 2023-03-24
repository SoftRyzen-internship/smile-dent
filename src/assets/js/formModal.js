import { addIshiddenModal } from './modal';
import { openModalSentForm } from './popupSent';
const formModalBook = document.getElementById('form-book-modal');
const modalNameField = document.getElementById('modal-name');
const modalEmailField = document.getElementById('modal-email-book');
const modalPhoneField = document.getElementById('modal-phone');

formModalBook.addEventListener('input', onInputChangeModal);
formModalBook.addEventListener('submit', onHandleSubmitModal);

function onInputChangeModal({ target }) {
  if (target.hasAttribute('data-reg')) {
    inputCheckModal(target);
  }
}

function inputCheckModal(el) {
  let isValid = true;
  const inputValue = el.value.trim();

  const inputReg = el.getAttribute('data-reg');
  const reg = new RegExp(inputReg);

  if (reg.test(inputValue)) {
    setSuccessModal(el);
  } else {
    setErrorModal(el);
    isValid = false;
  }
  return isValid;
}

function onHandleSubmitModal(e) {
  e.preventDefault();
  let isNameValid = inputCheckModal(modalNameField);
  let isEmailValid = inputCheckModal(modalEmailField);
  let isPhoneValid = inputCheckModal(modalPhoneField);
  let isFormValid = isNameValid && isEmailValid && isPhoneValid;
  if (isFormValid) {
    addIshiddenModal();
    openModalSentForm();
    e.currentTarget.reset();
  }
}

function setErrorModal(field) {
  field.classList.add('error__input');
  field.classList.remove('success__input');
}

function setSuccessModal(field) {
  field.classList.add('success__input');
  field.classList.remove('error__input');
}
export function clearModalForm() {
  formModalBook.reset();
}
