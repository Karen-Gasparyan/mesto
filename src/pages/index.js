import './index.css'; // enable on npm run build

import {
  Card
} from '../scripts/components/Card.js';

import {
  Section
} from '../scripts/components/Section.js';

import {
  PopupWithImage
} from '../scripts/components/PopupWithImage.js';

import {
  PopupWithForm
} from '../scripts/components/PopupWithForm.js';

import {
  UserInfo
} from '../scripts/components/UserInfo.js';

import {
  validationConfig,
  FormValidator
} from '../scripts/components/FormValidator.js';

import {
  buttonEditProfile,
  buttonAddProfile,
  editFormElement,
  addFormElement,
  editProfileNameInput,
  editProfileJobInput,
  containerElements,
  INITIAL_CARDS
} from '../scripts/constants.js';


/* USER INFO */
const userInfo = new UserInfo({
  userName: '.profile__title',
  userjob: '.profile__subtitile'
});
/* /USER INFO */


/* POPUPS */
const editForm = new PopupWithForm('.pop-up_edit', handleEditProfile);
editForm.setEventListeners();

const addForm = new PopupWithForm('.pop-up_img', handleAddProfile);
addForm.setEventListeners();

const popupWithImage = new PopupWithImage('.pop-up_fullscreen');
popupWithImage.setEventListeners();

// popup edit profile values
function writeInTheField() {
  const {
    name,
    job
  } = userInfo.getUserInfo();
  editProfileNameInput.value = name;
  editProfileJobInput.value = job;
}

// popup fullscreen open
function handleCardClick(name, src) {
  popupWithImage.open(name, src);
}
/* /POPUPS */


/* VALIDATION */
const editProfileValidator = new FormValidator(validationConfig, editFormElement);
editProfileValidator.enableValidation();

const addProfileValidator = new FormValidator(validationConfig, addFormElement);
addProfileValidator.enableValidation();
/* /VALIDATION */


/* COMPOSE CARD */
function createCard(item) {
  const newCard = new Card(item, '.template-card', handleCardClick);
  return newCard.generateCard();
}

const cardsList = new Section({
    items: INITIAL_CARDS,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardsList.addItem(cardElement);
    },
  },
  containerElements
);

cardsList.renderItems();
/* /COMPOSE CARD */


/* FORMS HANDLERS */
function handleEditProfile(e, data) {
  e.preventDefault();
  userInfo.setUserInfo(data.name, data.job);
  editForm.close();
}

function handleAddProfile(e, data) {
  e.preventDefault();

  const addNewCardToHTML = createCard({
    name: data.place,
    src: data.linkToImage
  });

  cardsList.addNewItem(addNewCardToHTML);
  addForm.close();
}
/* /FORMS HANDLERS */


/* LISTENS TO EVENTS */
buttonEditProfile.addEventListener('click', () => {
  editProfileValidator.resetValidation();
  writeInTheField();
  editForm.open();
});

buttonAddProfile.addEventListener('click', () => {
  addProfileValidator.resetValidation();
  addForm.open();
});
/* /LISTENS TO EVENTS */


//   ¯\_(ツ)_/¯   THE END...