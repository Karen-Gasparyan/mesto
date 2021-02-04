export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._popupButton = this._popup.querySelector('.pop-up__close-btn');
  }

  open() {
    this._popup.classList.add('pop-up_opened');
    this.setEventListeners();
  }

  close() {
    const popupOpened = document.querySelector('.pop-up_opened');
    popupOpened.classList.remove('pop-up_opened');
  }

  _handleEscClose(e) {
    const popupOpened = document.querySelector('.pop-up_opened');
    if (e.key === 'Escape' || e.target === popupOpened) {
      if (popupOpened !== null) {
        popupOpened.classList.remove('pop-up_opened');
      }
    }
  }

  setEventListeners() {
    this._popupButton.addEventListener('click', this.close);
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleEscClose);
  }
}