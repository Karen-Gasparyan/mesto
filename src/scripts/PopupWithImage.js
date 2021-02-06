import {
  Popup
} from './Popup.js';

import {
  imagePopupPicture,
  imagePopupCaption
} from './constants.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, src) {
    super.open();
    imagePopupPicture.src = src;
    imagePopupPicture.alt = name;
    imagePopupCaption.textContent = name;
  }
}