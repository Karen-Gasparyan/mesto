// import './index.css'; // enable on npm run build

import {
  Api
} from '../scripts/components/Api.js';

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
  profileEditAvatar,
  buttonEditProfile,
  buttonAddProfile,
  editFormElement,
  addFormElement,
  editAvatarFormElement,
  editProfileNameInput,
  editProfileJobInput,
  containerElements,
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

const popupChangeAvatar = new PopupWithForm('.pop-up_change-avatar', handleEditAvatar);
popupChangeAvatar.setEventListeners();

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

const editAvatarValidator = new FormValidator(validationConfig, editAvatarFormElement);
editAvatarValidator.enableValidation();
/* /VALIDATION */


/* DOWNLOAD CARDS */
const downloadСards = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-20/cards/',
  headers: {
    authorization: 'e4e57aba-b1e6-4fc1-8294-ad6d7d0fcf8d',
    'Content-Type': 'application/json'
  }
});

downloadСards.getInitialCards()
.then((data) => {
    const cardsList = new Section({
      items: data,
      renderer: (item) => {
        const cardElement = createCard(item);
        cardsList.addItem(cardElement);
      },
    },
    containerElements
  );
  cardsList.renderItems();
})

function createCard(item) {
  const newCard = new Card(item, '.template-card', handleCardClick);
  return newCard.generateCard();
}
/* /DOWNLOAD CARDS */


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

function handleEditAvatar(e) {
  e.preventDefault();

  popupChangeAvatar.close();
}
/* /FORMS HANDLERS */


/* LISTENS TO EVENTS */
profileEditAvatar.addEventListener('click', () => {
  editAvatarValidator.resetValidation();
  popupChangeAvatar.open();
});

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