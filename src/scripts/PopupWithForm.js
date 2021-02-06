import {
  Popup
} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormCallback) {
    super(popupSelector);
    this._submitFormCallBack = submitFormCallback;
    this._form = popupSelector;
  }

  _getInputValues() {
    const inputList = this._form.querySelectorAll('input');
    const result = {};
    inputList.forEach(input => {
      const name = input.getAttribute('name');
      const value = input.value;
      result[name] = value;
    });
    return result;
  }

  setEventListeners() {
    this._form.addEventListener('submit', this._submitFormCallBack);
  }

  close() {
    this._form.reset();
  }
}