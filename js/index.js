import {
  Card,
  popupFullscreen,
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
    src: './images/moscow.jpg'
  },
  {
    name: 'Санкт Петербург',
    src: './images/saint-peterburg.jpg'
  },
  {
    name: 'Великий Новгород',
    src: './images/velikiy-novgorod.jpg'
  },
  {
    name: 'Сочи',
    src: './images/sochi.jpg'
  },
  {
    name: 'Камчатка',
    src: './images/kamchatka.jpg'
  },
  {
    name: 'Байкал',
    src: './images/baikal.jpg'
  }
];
/* /variables */

const runValidation = () => {
  const allForms = document.querySelectorAll('.pop-up__form');
  allForms.forEach(form => {
    const formValidation = new FormValidator(validationConfig, form);
    formValidation.enableValidation();
  });
};

const renderElements = () => {
  INITIAL_CARDS.forEach(item => {
    const newCard = new Card(item, '.template-card');
    const cardElement = newCard.generateCard();
    containerElements.append(cardElement);
  });
};

renderElements();
runValidation();

// edit profile write form values
function writeInTheField() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

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
  const addNewCardToHTML = new Card({
    name: inputText,
    src: inputImg,
  }, '.template-card').generateCard();

  containerElements.prepend(addNewCardToHTML);
  formElementImg.reset();
  closePopup(popupImg);
}
/* /forms handlers */

/* listens to events */
// edit profile
editBtn.addEventListener('click', () => {
  writeInTheField();
  openPopup(popupEdit);
});

closeBtnEdit.addEventListener('click', () => {
  formElementEdit.reset();
  closePopup(popupEdit);
});

// add profile
addBtnImg.addEventListener('click', () => {
  runValidation();
  openPopup(popupImg);
});

closeBtnImg.addEventListener('click', () => {
  formElementImg.reset();
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