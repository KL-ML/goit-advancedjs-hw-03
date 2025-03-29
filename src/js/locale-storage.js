// const searchForm = document.querySelector('.search-form');
const LOCALSTORAGE_KEY = 'search-form-state';

function setInputDataToLocalStorage(event) {
  const query = event.target.form.elements.searchQuery.value.trim();
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(query));
}

function populateInputData(searchForm) {
  const inputValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (inputValue) {
    searchForm.elements.searchQuery.value = inputValue;
  }
}

function removeFromLS() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

export { setInputDataToLocalStorage, populateInputData, removeFromLS };
