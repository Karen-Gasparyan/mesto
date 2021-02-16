import {
  Popup
} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormCallback) {
    super(popupSelector);
    this._submitFormCallBack = submitFormCallback;
    this._form = this._popup.querySelector('.pop-up__form');
    this._inputList = this._popup.querySelectorAll('input');
  }

  _getInputValues() {
    const result = {};
    this._inputList.forEach(input => {
      const name = input.getAttribute('name');
      const value = input.value;
      result[name] = value;
    });
    return result;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => this._submitFormCallBack(e, this._getInputValues()));
  }

  close() {
    super.close();
    this._form.reset();
  }
}


//   ¯\_(ツ)_/¯   THE END...