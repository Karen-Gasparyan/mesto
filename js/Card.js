import {
  escapeKeyHandler,
  overlayKeyHandler
} from './utils.js';

export const popupFullscreen = document.querySelector('.pop-up_fullscreen'),
  imageFullscrean = document.querySelector('.pop-up__image-fullscreen'),
  captionFullscreen = document.querySelector('.pop-up__captiion-fullscreen');

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._src = data.src;
    this._cardSelector = cardSelector;
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
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._src;

    return this._element;
  }

  _deleteCard(e) {
    e.target.closest('.element').remove();
  }

  _switchOfLike(e) {
    e.target.classList.toggle('element__like_active');
  }

  _openPopupFullscreen() {
    imageFullscrean.src = this._src;
    imageFullscrean.alt = this._name;
    captionFullscreen.textContent = this._name;

    popupFullscreen.classList.add('pop-up_opened');
    document.addEventListener('keydown', escapeKeyHandler);
    document.addEventListener('mousedown', overlayKeyHandler);
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openPopupFullscreen();
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