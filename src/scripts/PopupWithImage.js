import {
  Popup
} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector, img, imgName) {
    super(popupSelector);
    this._img = this.popupSelector.querySelector(img);
    this._imgName = this.popupSelector.querySelector(imgName);
  }

  open() {
    super.open();
  }
}