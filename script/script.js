/*variables*/
/*popup edit profile*/
let popup = document.querySelector('.pop-up');
let editButton = document.querySelector('.profile__edit-button');
let closeBtn = document.querySelector('.pop-up__close-btn');
/*/popup edit profile*/

/*popup add profile*/
let popupImg = document.querySelector('.pop-up_img');
let addButton = document.querySelector('.profile__add-button');
let closeBtnImg = popupImg.querySelector('.pop-up__close-btn');
/*/popup add profile*/

/*form edit profile*/
let formElement = document.querySelector('.pop-up__form');
let nameInput = document.querySelector('.pop-up__input-text_type_name');
let jobInput = document.querySelector('.pop-up__input-text_type_job');
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitile');
/*form edit profile*/

/*form add profile*/
//let formElementImg = popupImg.querySelector('.pop-up__form');
/*form add profile*/
/*/variables*/

/*popup edit profile*/
function openPopup(transmitted) {
  transmitted.classList.add('pop-up_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function closePopup(transmitted) {
  transmitted.classList.remove('pop-up_opened');
}
/*/popup edit profile*/

/*form edit profile*/
function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closePopup(popup);
  //closePopup(popupImg);
}
/*/form edit profile*/

/*popup add profile*/
/*/popup add profile*/

/*cards*/
/*/cards*/

editButton.addEventListener('click', () => {
  openPopup(popup);
});
closeBtn.addEventListener('click', () => {
  closePopup(popup);
});
formElement.addEventListener('submit', formSubmitHandler);

addButton.addEventListener('click', () => {
  openPopup(popupImg);
});
closeBtnImg.addEventListener('click', () => {
  closePopup(popupImg);
});
//formElementImg.addEventListener('submit', formSubmitHandler);
