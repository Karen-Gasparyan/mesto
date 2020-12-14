/* variables */
// popup edit profile
const popup = document.querySelector('.pop-up');
const editButton = document.querySelector('.profile__edit-button');
const closeBtn = document.querySelector('.pop-up__close-btn');

// form edit profile
const formElement = document.querySelector('.pop-up__form');
const nameInput = document.querySelector('.pop-up__input-text_type_name');
const jobInput = document.querySelector('.pop-up__input-text_type_job');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitile');

// popup add profile
const popupImg = document.querySelector('.pop-up_img');
const addButton = document.querySelector('.profile__add-button');
const closeBtnImg = popupImg.querySelector('.pop-up__close-btn');
const saveBtnImg = popupImg.querySelector('.pop-up__save-btn_img');
const inputTitle = popupImg.querySelector('.pop-up__input-text_type_title');
const inputLink = popupImg.querySelector('.pop-up__input-text_type_link');

// form add profile
const formElementImg = popupImg.querySelector('.pop-up__form');

// popup fullscreen
const popupFullscreen = document.querySelector('.pop-up_fullscreen');
const closeBtnFullscreenImg = popupFullscreen.querySelector('.pop-up__close-btn');

// section (wrapper!)
const containerElements = document.querySelector('.elements');

// template
const templateCard = document.querySelector('.template-card');
/* /variables */


/* popup */
function openPopup(transmitted) {
  transmitted.classList.add('pop-up_opened');
}

function closePopup(transmitted) {
  transmitted.classList.remove('pop-up_opened');
  saveEditFormValues();
}
/* /popup */


// save edit profile form value
function saveEditFormValues() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

// clear add profile form value
function clearEditFormValues() {
  inputTitle.value = '';
  inputLink.value = '';
}

// forms handler
function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closePopup(popup);
  closePopup(popupImg);
}


/* cards */
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

// render list
function renderList() {
  const listItems = INITIAL_CARDS.map(initialCards);
  containerElements.append(...listItems);
}

/* add initial cards */
function initialCards(item) {
  const initialCard = templateCard.content.cloneNode(true);
  const titleCard = initialCard.querySelector('.element__title');
  titleCard.textContent = item.name;
  const imageCard = initialCard.querySelector('.element__image');
  imageCard.alt = item.name;
  imageCard.src = item.src;

  // add & remove like
  const likeButton = initialCard.querySelector('.element__like');
  likeButton.addEventListener('click', switchOfLike);

  // delete card
  const deleteButton = initialCard.querySelector('.element__deleted');
  deleteButton.addEventListener('click', deleteCard);

  // open fullscreen popup
  imageCard.addEventListener('click', openPopupFullscreenImage);

  return initialCard;
}
/* /add initial cards */


// add & remove like
function switchOfLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

// delete card
function deleteCard(evt) {
  const targetElement = evt.target;
  const targetCard = targetElement.closest('.element');
  targetCard.remove();
}

// open fullscreen popup
function openPopupFullscreenImage(evt) {
  const targetImage = evt.target;
  const imageFullscrean = document.querySelector('.pop-up__image-fullscreen');
  imageFullscrean.src = targetImage.src;
  const captionFullscreen = document.querySelector('.pop-up__captiion-fullscreen');
  captionFullscreen.textContent = targetImage.alt;
  openPopup(popupFullscreen);
}

/* create new card */
function creatNewCard() {
  saveBtnImg.addEventListener('click', addNewCard);
}

function addNewCard() {
  if (inputTitle.value && inputLink.value) {
    const inputText = inputTitle.value;
    const inputImg = inputLink.value;
    const newCardHTML = initialCards({
      name: inputText,
      src: inputImg
    });

    containerElements.prepend(newCardHTML);
    closePopup(popupImg);
  }
}
/* /create new card */

renderList();
creatNewCard();
/* /cards */


/* listens to events */
editButton.addEventListener('click', () => {
  openPopup(popup);
  saveEditFormValues();
});

addButton.addEventListener('click', () => {
  openPopup(popupImg);
  clearEditFormValues();
});

closeBtn.addEventListener('click', () => {
  closePopup(popup);
});

closeBtnImg.addEventListener('click', () => {
  closePopup(popupImg);
});

closeBtnFullscreenImg.addEventListener('click', () => {
  closePopup(popupFullscreen);
});

formElement.addEventListener('submit', formSubmitHandler);
formElementImg.addEventListener('submit', formSubmitHandler);
/* /listens to events */