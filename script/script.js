/*variables*/
/*popup*/
let editButton = document.querySelector('.profile__edit-button');
let closeBtn = document.querySelector('.pop-up__close-btn');
let popup = document.querySelector('.pop-up');
/*/popup*/
/*form*/
let formElement = document.querySelector('.pop-up__container');
let nameInput = document.querySelector('.pop-up__input-text_type_name');
let jobInput = document.querySelector('.pop-up__input-text_type_job');
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitile');
/*form*/
/*/variables*/

/*popup*/
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
/*/popup*/

/*form*/
function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
/*/form*/