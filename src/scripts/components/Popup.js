export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._popupButton = this._popup.querySelector('.pop-up__close-btn');
    this.close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add('pop-up_opened');
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
    document.addEventListener('keydown', this._handleEscClose);
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('pop-up_opened');
    this._popupButton.removeEventListener('click', this.close);
    this._popup.removeEventListener('mousedown', this._handleOverlayClose);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (e) => {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose = (e) => {
    if (e.target === e.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupButton.addEventListener('click', this.close);
  }
}


//   ¯\_(ツ)_/¯   THE END...