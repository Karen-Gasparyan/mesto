/*error*/
function showError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
}

function hideError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
  input.classList.remove(config.inputErrorClass);
}

// input validation
function checkInputValidity(form, input, config) {
  if (!input.validity.valid) {
    showError(form, input, config);
  } else {
    hideError(form, input, config);
  }
}
/*/error*/


// create input list
function setEventListener(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);

  inputList.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, config);
      setButtonState(submitButton, form.checkValidity(), config);
    });
  });
}


// button disablet (on/off)
function setButtonState(button, isActive, config) {
  if (!isActive) {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  }
}


// VALIDATION OF ALL FORMS
function enableValidation(config) {
  const allForms = document.querySelectorAll(config.formSelector);
  allForms.forEach(form => {
    setEventListener(form, config);

    const submitButton = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButton, form.checkValidity(), config);
  });
}

const validationConfig = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input-text',
  submitButtonSelector: '.pop-up__save-btn',
  inactiveButtonClass: 'pop-up__save-btn_invalid',
  inputErrorClass: 'pop-up__input-text_state_invalid'
};

enableValidation(validationConfig);