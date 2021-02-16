export const popupEdit = document.querySelector('.pop-up_edit'),
  buttonEditProfile = document.querySelector('.profile__edit-button'),
  // popup add profile
  popupAddImageCard = document.querySelector('.pop-up_img'),
  buttonAddProfile = document.querySelector('.profile__add-button'),
  addProfileInputTitle = popupAddImageCard.querySelector('.pop-up__input-text_type_title'),
  addProfileInputLink = popupAddImageCard.querySelector('.pop-up__input-text_type_link'),
  // popup fullscreen
  popupFullscreen = document.querySelector('.pop-up_fullscreen'),
  // form edit profile
  editFormElement = popupEdit.querySelector('.pop-up__form'),
  editProfileNameInput = popupEdit.querySelector('.pop-up__input-text_type_name'),
  editProfileJobInput = popupEdit.querySelector('.pop-up__input-text_type_job'),
  editProfileName = document.querySelector('.profile__title'),
  editProfileJob = document.querySelector('.profile__subtitile'),
  // form add profile
  addFormElement = popupAddImageCard.querySelector('.pop-up__form'),
  // section (wrapper!)
  containerElements = document.querySelector('.elements');

// import moscow from '../images/moscow.jpg';
// import saintPeterburg from '../images/saint-peterburg.jpg';
// import velikiyNovgorod from '../images/velikiy-novgorod.jpg';
// import sochi from '../images/sochi.jpg';
// import kamchatka from '../images/kamchatka.jpg';
// import baikal from '../images/baikal.jpg';

export const INITIAL_CARDS = [{
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


  //   ¯\_(ツ)_/¯   THE END...