import {
  Popup
} from './Popup.js';

export class PopupDelete extends Popup {
  constructor(popupSelector, submitFormCallback) {
    super(popupSelector);
    this._popupDeleteCard = document.querySelector(popupSelector);
    this._submitFormCallback = submitFormCallback;
    this._form = this._popupDeleteCard.querySelector('.pop-up__form');
  }

  // close() {
  //   super.close();
  // }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      // e.preventDefault();
      this._submitFormCallback;
      console.log('hiiii');
    });
  }
}