export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupButton = this._popup.querySelector('.pop-up__close-btn');
    this.close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add('pop-up_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('pop-up_opened');
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
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
  }
}


//   ¯\_(ツ)_/¯   THE END...