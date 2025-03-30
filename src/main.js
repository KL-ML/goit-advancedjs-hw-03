import { errorAllert } from './js/izi-toasts';
import {
  populateInputData,
  setInputDataToLocalStorage,
  removeFromLS,
} from './js/locale-storage';
import { getPhotos } from './js/pixabay-api';
import {
  renderGallery,
  resetGallery,
  renderLoader,
  resetLoader,
} from './js/render-functions';

const searchForm = document.querySelector('.form');

populateInputData(searchForm);

searchForm.addEventListener('input', setInputDataToLocalStorage);
searchForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();
    if (query === '') {
      errorAllert('Enter your search request');
    return;
  }

    resetGallery();
    renderLoader();
  getPhotos(query)
    .then(photos => {
      if (photos.total === 0) {
        errorAllert(
          'Sorry, there are no images matching your search query. Please try again!'
        );
          resetLoader();
        resetGallery();
        return;
      }
        resetLoader();
      renderGallery(photos);
    })
    .catch(error => {
      errorAllert(`Error ${error}`);
    })
    .finally(() => {
      searchForm.reset();
    });
  event.target.reset();
  removeFromLS();
}

// function setInputDataToLocalStorage(event) {
//   const query = event.target.form.elements.searchQuery.value.trim();
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(query));
// }

// function populateInputData() {
//   const inputValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
//   if (inputValue) {
//     searchForm.elements.searchQuery.value = inputValue;
//   }
// }
