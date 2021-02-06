// import '../pages/index.css'; // enable on build
import {
  Card
} from './Card.js';

import {
  Section
} from './Section.js';

import {
  Popup
} from './Popup.js';

import {
  PopupWithImage
} from './PopupWithImage.js';

import {
  PopupWithForm
} from './PopupWithForm.js';

import {
  validationConfig,
  FormValidator
} from './FormValidator.js';

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
  editProfileName,
  editProfileJob,
  addFormElement,
  containerElements,
  INITIAL_CARDS
} from './constants.js';


/* Popups */
const popupEditProfile = new Popup(popupEdit);
const popupAddProfile = new Popup(popupAddImageCard);
const popupFullscreenImage = new PopupWithImage(popupFullscreen);

const editForm = new PopupWithForm(editFormElement, formSubmitHandlerEditProfile);
const addForm = new PopupWithForm(addFormElement, formSubmitHandlerAddProfile);

const userInfo = new UserInfo({userName: editProfileName, userJob: editProfileJob});

// popup edit profile values
function writeInTheField() {
  editProfileNameInput.value = editProfileName.textContent;
  editProfileJobInput.value = editProfileJob.textContent;
}

// popup fullscreen
function handleCardClick(name, src) {
  popupFullscreenImage.open(name, src);
}
/* /Popups */


/* compose card */
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
/* /compose card */


/* validation */
const editProfileValidator = new FormValidator(validationConfig, editFormElement);
editProfileValidator.enableValidation();

const addProfileValidator = new FormValidator(validationConfig, addFormElement);
addProfileValidator.enableValidation();
/* /validation */


/* forms handlers */
function formSubmitHandlerEditProfile(e) {
  e.preventDefault();
  editProfileName.textContent = editProfileNameInput.value;
  editProfileJob.textContent = editProfileJobInput.value;
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
/* /forms handlers */


/* listens to events */
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
/* /listens to events */




/* submit */
// editFormElement.addEventListener('submit', formSubmitHandlerEditProfile);
// addFormElement.addEventListener('submit', formSubmitHandlerAddProfile);
/* /submit */

//   ¯\_(ツ)_/¯   THE END...