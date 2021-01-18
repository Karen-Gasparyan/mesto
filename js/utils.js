export function openPopup(e) {
  e.classList.add('pop-up_opened');
  document.addEventListener('keydown', escapeKeyHandler);
  document.addEventListener('mousedown', overlayKeyHandler);
}

export function closePopup(e) {
  e.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', escapeKeyHandler);
  document.removeEventListener('mousedown', overlayKeyHandler);
}

export function escapeKeyHandler(e) {
  if (e.key === 'Escape') {
    const popupOpened = document.querySelector('.pop-up_opened');
    if (popupOpened !== null) {
      closePopup(popupOpened);
    }
  }
}

export function overlayKeyHandler(e) {
  const popupOpened = document.querySelector('.pop-up_opened');
  if (e.target === popupOpened) {
    closePopup(popupOpened);
  }
}

//   ¯\_(ツ)_/¯   THE END...