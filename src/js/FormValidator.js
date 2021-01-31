export const validationConfig = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input-text',
  submitButtonSelector: '.pop-up__save-btn',
  inactiveButtonClass: 'pop-up__save-btn_invalid',
  inputErrorClass: 'pop-up__input-text_state_invalid'
};

export class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._form = form;
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._btn = this._form.querySelector(this._submitButtonSelector);
  }

  _showError() {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    error.textContent = this._input.validationMessage;
    this._input.classList.add(this._inputErrorClass);
  }

  _hideError() {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    error.textContent = '';
    this._input.classList.remove(this._inputErrorClass);
  }

  // input validation
  _checkInputValidity(input) {
    this._input = input;
    if (!this._input.validity.valid) {
      this._showError();
    } else {
      this._hideError();
    }
  }

  // button disablet (on/off)
  _setButtonState(isActive) {
    if (!isActive) {
      this._btn.classList.add(this._inactiveButtonClass);
      this._btn.disabled = true;
    } else {
      this._btn.classList.remove(this._inactiveButtonClass);
      this._btn.disabled = false;
    }
  }

  // create input list
  _setEventListener() {
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._setButtonState(this._form.checkValidity());
      });
    });
  }

  resetValidation() {
    this._inputList.forEach(input => {
      const inputError = this._form.querySelector(`#${input.id}-error`);
      inputError.textContent = '';
      input.classList.remove(this._inputErrorClass);
      this._form.reset();
    });
  }

  enableValidation() {
    this._setEventListener();
    this._setButtonState(this._form.checkValidity());
  }
}

//   ¯\_(ツ)_/¯   THE END...