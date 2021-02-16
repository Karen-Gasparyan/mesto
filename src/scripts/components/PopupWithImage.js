import {
  Popup
} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopupPicture = document.querySelector('.pop-up__image-fullscreen');
    this._imagePopupCaption = document.querySelector('.pop-up__captiion-fullscreen');
  }

  open(name, src) {
    super.open();
    this._imagePopupPicture.src = src;
    this._imagePopupPicture.alt = name;
    this._imagePopupCaption.textContent = name;
  }
}


//   ¯\_(ツ)_/¯   THE END...