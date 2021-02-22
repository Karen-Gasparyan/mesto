import {
  Popup
} from './Popup.js';

export class PopupDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._submitFormCallback = submitFormCallback;
    this._popupDeleteCard = document.querySelector(popupSelector);
    this._form = this._popupDeleteCard.querySelector('.pop-up__form');
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) =>  {
       e.preventDefault();
       console.log('submit');
       this._form.close();
      // this._popupDeleteCard.classList.remove('pop-up_opened');
    });
  }
}