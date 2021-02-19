export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();

    return this._element;
  }

  _deleteCard(e) {
    // e.target.closest('.element').remove();

    // const popupDel = document.querySelector('.pop-up_delete-card');
    // popupDel.classList.add('pop-up_opened');

    // const popupDel = document.querySelector('.pop-up_change-avatar');
    // popupDel.classList.add('pop-up_opened');

    console.log('click');
  }

  _switchOfLike(e) {
    e.target.classList.toggle('element__like_active');
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._element.querySelector('.element__deleted').addEventListener('click', (e) => {
      this._deleteCard(e);
    });

    this._element.querySelector('.element__like').addEventListener('click', (e) => {
      this._switchOfLike(e);
    });
  }
}


//   ¯\_(ツ)_/¯   THE END...