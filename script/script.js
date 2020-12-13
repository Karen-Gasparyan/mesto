/* variables */
// popup edit profile
let popup = document.querySelector('.pop-up');
let editButton = document.querySelector('.profile__edit-button');
let closeBtn = document.querySelector('.pop-up__close-btn');

// form edit profile
let formElement = document.querySelector('.pop-up__form');
let nameInput = document.querySelector('.pop-up__input-text_type_name');
let jobInput = document.querySelector('.pop-up__input-text_type_job');
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitile');

// popup add profile
let popupImg = document.querySelector('.pop-up_img');
let addButton = document.querySelector('.profile__add-button');
let closeBtnImg = popupImg.querySelector('.pop-up__close-btn');
let saveBtnImg = popupImg.querySelector('.pop-up__save-btn_img');
let inputTitle = popupImg.querySelector('.pop-up__input-text_type_title');
let inputLink = popupImg.querySelector('.pop-up__input-text_type_link');

// form add profile
let formElementImg = popupImg.querySelector('.pop-up__form');

// section (wrapper!)
let containerElements = document.querySelector('.elements');

// template
let templateCard = document.querySelector('.template-card');
/* /variables */


/* popup */
function openPopup(transmitted) {
  transmitted.classList.add('pop-up_opened');
}

function closePopup(transmitted) {
  transmitted.classList.remove('pop-up_opened');
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
    src: '../images/moscow.jpg'
  },
  {
    name: 'Санкт Петербург',
    src: '../images/saint-peterburg.jpg'
  },
  {
    name: 'Великий Новгород',
    src: '../images/velikiy-novgorod.jpg'
  },
  {
    name: 'Сочи',
    src: '../images/sochi.jpg'
  },
  {
    name: 'Камчатка',
    src: '../images/kamchatka.jpg'
  },
  {
    name: 'Байкал',
    src: '../images/baikal.jpg'
  }
];

// render list
function renderList() {
  let listItems = INITIAL_CARDS.map(initialCards);
  containerElements.append(...listItems);
}

/* add initial cards */
function initialCards(item) {
  let initialCard = templateCard.content.cloneNode(true);
  let titleCard = initialCard.querySelector('.element__title');
  titleCard.textContent = item.name;
  let imageCard = initialCard.querySelector('.element__image');
  imageCard.alt = item.name;
  imageCard.src = item.src;

  // add & remove like
  let likeButton = initialCard.querySelector('.element__like');
  likeButton.addEventListener('click', switchOfLike);

  // delete card
  let deleteButton = initialCard.querySelector('.element__deleted');
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
  let targetElement = evt.target;
  let targetCard = targetElement.closest('.element');
  targetCard.remove();
}

// open fullscreen popup
function openPopupFullscreenImage() {
  console.log('Open full screen image');
}

/* create new card */
function creatNewCard() {
  saveBtnImg.addEventListener('click', addNewCard);
}

function addNewCard() {
  if (inputTitle.value && inputLink.value) {
    let inputText = inputTitle.value;
    let inputImg = inputLink.value;
    let newCardHTML = initialCards({
      name: inputText,
      src: inputImg
    });

    containerElements.prepend(newCardHTML);
    clearEditFormValues();
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
});

closeBtn.addEventListener('click', () => {
  closePopup(popup);
});

closeBtnImg.addEventListener('click', () => {
  closePopup(popupImg);
});

formElement.addEventListener('submit', formSubmitHandler);
formElementImg.addEventListener('submit', formSubmitHandler);
/* /listens to events */