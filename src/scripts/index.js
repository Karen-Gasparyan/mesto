// import '../pages/index.css'; // enable on build

import {
  Card
} from './Card.js';

import {
  openPopup,
  closePopup
} from './utils.js';

import {
  validationConfig,
  FormValidator
} from './FormValidator.js';

/* variables */
// popup edit profile
const popupEdit = document.querySelector('.pop-up_edit'),
  editBtn = document.querySelector('.profile__edit-button'),
  closeBtnEdit = popupEdit.querySelector('.pop-up__close-btn'),
  // popup add profile
  popupImg = document.querySelector('.pop-up_img'),
  addBtnImg = document.querySelector('.profile__add-button'),
  closeBtnImg = popupImg.querySelector('.pop-up__close-btn'),
  inputTitle = popupImg.querySelector('.pop-up__input-text_type_title'),
  inputLink = popupImg.querySelector('.pop-up__input-text_type_link'),
  // popup fullscreen
  popupFullscreen = document.querySelector('.pop-up_fullscreen'),
  imagePopupPicture = document.querySelector('.pop-up__image-fullscreen'),
  imagePopupCaption = document.querySelector('.pop-up__captiion-fullscreen'),
  closeBtnFullscreen = popupFullscreen.querySelector('.pop-up__close-btn'),
  // form edit profile
  formElementEdit = popupEdit.querySelector('.pop-up__form'),
  nameInput = popupEdit.querySelector('.pop-up__input-text_type_name'),
  jobInput = popupEdit.querySelector('.pop-up__input-text_type_job'),
  profileName = document.querySelector('.profile__title'),
  profileJob = document.querySelector('.profile__subtitile'),
  // form add profile
  formElementImg = popupImg.querySelector('.pop-up__form'),
  // section (wrapper!)
  containerElements = document.querySelector('.elements');

const INITIAL_CARDS = [{
    name: 'Москва - Собор Василия Блаженного',
    src: '../../src/images/moscow.jpg'
  },
  {
    name: 'Санкт Петербург',
    src: '../../src/images/saint-peterburg.jpg'
  },
  {
    name: 'Великий Новгород',
    src: '../../src/images/velikiy-novgorod.jpg'
  },
  {
    name: 'Сочи',
    src: '../../src/images/sochi.jpg'
  },
  {
    name: 'Камчатка',
    src: '../../src/images/kamchatka.jpg'
  },
  {
    name: 'Байкал',
    src: '../../src/images/baikal.jpg'
  }
];
/* /variables */

// popup fullscreen
function handleCardClick(name, src) {
  imagePopupPicture.src = src;
  imagePopupPicture.alt = name;
  imagePopupCaption.textContent = name;
  openPopup(popupFullscreen);
}

/* compose card and validation */
function createCard(item) {
  const newCard = new Card(item, '.template-card', handleCardClick);
  return newCard.generateCard();
}

const renderElements = () => {
  INITIAL_CARDS.forEach(item => {
    const cardElement = createCard(item);
    containerElements.append(cardElement);
  });
};

const profileValidator = new FormValidator(validationConfig, formElementEdit);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, formElementImg);
addCardValidator.enableValidation();

renderElements();
/* /compose card and validation */

/* forms handlers */
function formSubmitHandlerForPopupEditProfile(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function formSubmitHandlerForPopupAddProfile(e) {
  e.preventDefault();
  const inputText = inputTitle.value;
  const inputImg = inputLink.value;

  const addNewCardToHTML = createCard({
    name: inputText,
    src: inputImg,
  });

  containerElements.prepend(addNewCardToHTML);
  formElementImg.reset();
  closePopup(popupImg);
}
/* /forms handlers */

// edit profile write form values
function writeInTheField() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

/* listens to events */
// edit profile
editBtn.addEventListener('click', () => {
  profileValidator.resetValidation();
  // profileValidator.enableValidation();
  writeInTheField();
  openPopup(popupEdit);
});

closeBtnEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});

// add profile
addBtnImg.addEventListener('click', () => {
  addCardValidator.resetValidation();
  openPopup(popupImg);
});

closeBtnImg.addEventListener('click', () => {
  closePopup(popupImg);
});

closeBtnFullscreen.addEventListener('click', () => {
  closePopup(popupFullscreen);
});

// submit
formElementEdit.addEventListener('submit', formSubmitHandlerForPopupEditProfile);
formElementImg.addEventListener('submit', formSubmitHandlerForPopupAddProfile);
/* /listens to events */

//   ¯\_(ツ)_/¯   THE END...