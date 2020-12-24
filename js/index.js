/* variables */
// popup edit profile
const popupEdit = document.querySelector('.pop-up_edit');
const editBtn = document.querySelector('.profile__edit-button');
const closeBtnEdit = popupEdit.querySelector('.pop-up__close-btn');
// form edit profile
const formElementEdit = popupEdit.querySelector('.pop-up__form');
const nameInput = popupEdit.querySelector('.pop-up__input-text_type_name');
const jobInput = popupEdit.querySelector('.pop-up__input-text_type_job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitile');

// popup add profile
const popupImg = document.querySelector('.pop-up_img');
const addBtnImg = document.querySelector('.profile__add-button');
const closeBtnImg = popupImg.querySelector('.pop-up__close-btn');
const inputTitle = popupImg.querySelector('.pop-up__input-text_type_title');
const inputLink = popupImg.querySelector('.pop-up__input-text_type_link');
// form add profile
const formElementImg = popupImg.querySelector('.pop-up__form');

// popup fullscreen
const popupFullscreen = document.querySelector('.pop-up_fullscreen');
const imageFullscrean = popupFullscreen.querySelector('.pop-up__image-fullscreen');
const captionFullscreen = popupFullscreen.querySelector('.pop-up__captiion-fullscreen');
const closeBtnFullscreen = popupFullscreen.querySelector('.pop-up__close-btn');

// section (wrapper!)
const containerElements = document.querySelector('.elements');

// template
const templateCard = document.querySelector('.template-card');
/* /variables */


/* popups */
function openPopup(transmitted) {
  transmitted.classList.add('pop-up_opened');
  document.addEventListener('keydown', escapeKeyHandler);
  document.addEventListener('mousedown', overlayKeyHandler);

  // run validation (file: validate.js)
  enableValidation(validationConfig);
}

function closePopup(transmitted) {
  transmitted.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', escapeKeyHandler);
  document.removeEventListener('mousedown', overlayKeyHandler);
}

// closed by escape
function escapeKeyHandler(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.pop-up_opened');
    if (popupOpened !== null) {
      closePopup(popupOpened);
    }
  }
}

// closed by overlay
function overlayKeyHandler(evt) {
  const popupOpened = document.querySelector('.pop-up_opened');
  if (evt.target === popupOpened) {
    closePopup(popupOpened);
  }
}
/* /popups */


/* forms handler */
// edit profile
function formSubmitHandlerForPopupEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  formElementEdit.reset();
  closePopup(popupEdit);
}

// add profile (add new card)
function formSubmitHandlerForPopupAddProfile(evt) {
  evt.preventDefault();
  const inputText = inputTitle.value;
  const inputImg = inputLink.value;
  const newCardHTML = composeCard({
    name: inputText,
    src: inputImg
  });
  containerElements.prepend(newCardHTML);
  formElementImg.reset();
  closePopup(popupImg);
}
/* /forms handler */


// edit profile write form values
function writeInTheField() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}


// RENDER LIST
function renderList() {
  const listItems = INITIAL_CARDS.map(composeCard);
  containerElements.append(...listItems);
}


/* add INITIAL CARDS */
function composeCard(item) {
  const clonedСard = templateCard.content.cloneNode(true);
  const titleCard = clonedСard.querySelector('.element__title');
  titleCard.textContent = item.name;
  const imageCard = clonedСard.querySelector('.element__image');
  imageCard.alt = item.name;
  imageCard.src = item.src;

  // add & remove like
  const likeButton = clonedСard.querySelector('.element__like');
  likeButton.addEventListener('click', switchOfLike);

  // delete card
  const deleteButton = clonedСard.querySelector('.element__deleted');
  deleteButton.addEventListener('click', deleteCard);

  // open fullscreen popup
  imageCard.addEventListener('click', () => {
    openPopupFullscreen(item);
  });

  return clonedСard;
}
/* /add initial cards */


// add & remove like
function switchOfLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

// delete card
function deleteCard(evt) {
  evt.target.closest('.element').remove();
}

// open fullscreen popup
function openPopupFullscreen(item) {
  imageFullscrean.src = item.src;
  imageFullscrean.alt = item.name;
  captionFullscreen.textContent = item.name;
  openPopup(popupFullscreen);
}


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
  openPopup(popupImg);
});

closeBtnImg.addEventListener('click', () => {
  formElementImg.reset();
  closePopup(popupImg);
});

// fullscreen
closeBtnFullscreen.addEventListener('click', () => {
  closePopup(popupFullscreen);
});


formElementEdit.addEventListener('submit', formSubmitHandlerForPopupEditProfile);
formElementImg.addEventListener('submit', formSubmitHandlerForPopupAddProfile);
/* /listens to events */

renderList();

//   ¯\_(ツ)_/¯   THE END...