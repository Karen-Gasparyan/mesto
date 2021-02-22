export class Card {
  constructor(data, cardSelector, handleCardClick, deleteCard) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._deleteCard = deleteCard;
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

  // _deleteCard(e) {
  //   e.target.closest('.element').remove();
  // }

  _switchOfLike(e) {
    e.target.classList.toggle('element__like_active');
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._element.querySelector('.element__deleted').addEventListener('click', () => {
      this._deleteCard();
      console.log(this._deleteCard);
    });

    this._element.querySelector('.element__like').addEventListener('click', (e) => {
      this._switchOfLike(e);
    });
  }
}


//   ¯\_(ツ)_/¯   THE END...