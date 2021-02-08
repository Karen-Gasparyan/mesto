import '../pages/index.css'; // enable on npm run build

import {
  Card
} from './components/Card.js';

import {
  Section
} from './components/Section.js';

import {
  Popup
} from './components/Popup.js';

import {
  PopupWithImage
} from './components/PopupWithImage.js';

import {
  PopupWithForm
} from './components/PopupWithForm.js';

import {
  UserInfo
} from './components/UserInfo.js';

import {
  validationConfig,
  FormValidator
} from './components/FormValidator.js';

import {
  popupEdit,
  buttonEditProfile,
  popupAddImageCard,
  buttonAddProfile,
  addProfileInputTitle,
  addProfileInputLink,
  popupFullscreen,
  editFormElement,
  editProfileNameInput,
  editProfileJobInput,
  addFormElement,
  containerElements,
  INITIAL_CARDS
} from './constants.js';


/* USER INFO */
const userInfo = new UserInfo({
  userName: '.profile__title',
  userjob: '.profile__subtitile'
});
/* /USER INFO */


/* POPUPS */
const popupEditProfile = new Popup(popupEdit);
const popupAddProfile = new Popup(popupAddImageCard);
const popupFullscreenImage = new PopupWithImage(popupFullscreen);

const editForm = new PopupWithForm(editFormElement, formSubmitHandlerEditProfile);
const addForm = new PopupWithForm(addFormElement, formSubmitHandlerAddProfile);

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
  popupFullscreenImage.open(name, src);
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
function formSubmitHandlerEditProfile(e) {
  e.preventDefault();
  userInfo.setUserInfo(editProfileNameInput.value, editProfileJobInput.value,);
  popupEditProfile.close();
}

function formSubmitHandlerAddProfile(e) {
  e.preventDefault();
  const inputText = addProfileInputTitle.value;
  const inputImg = addProfileInputLink.value;

  const addNewCardToHTML = createCard({
    name: inputText,
    src: inputImg,
  });

  containerElements.prepend(addNewCardToHTML);
  addFormElement.reset();
  popupAddProfile.close();
}
/* /FORMS HANDLERS */


/* LISTENS TO EVENTS */
buttonEditProfile.addEventListener('click', () => {
  editProfileValidator.resetValidation();
  writeInTheField();
  popupEditProfile.open();
  editForm.setEventListeners();
});

buttonAddProfile.addEventListener('click', () => {
  addProfileValidator.resetValidation();
  popupAddProfile.open();
  addForm.setEventListeners();
});
/* /LISTENS TO EVENTS */


//   ¯\_(ツ)_/¯   THE END...