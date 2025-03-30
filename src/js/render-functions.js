// функції для відображення елементів інтерфейсу.
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');

function renderGallery(images) {
  const markup = images.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
            <div class="photo-card">
              <a href="${largeImageURL}" class="img-link">
                  <img class="img" src="${webformatURL}" alt="${tags}" width=360px; loading="lazy" />
              </a>
              <div class="info">
                  <p class="info-item">
                      <b>Likes </b>${likes}
                  </p>
                  <p class="info-item">
                      <b>Views </b>${views}
                  </p>
                  <p class="info-item">
                      <b>Comments </b>${comments}
                  </p>
                  <p class="info-item">
                      <b>Downloads </b>${downloads}
                  </p>
              </div>
            </div>
        `;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  new SimpleLightbox('ul.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();
}

function resetGallery() {
  gallery.innerHTML = '';
}

function renderLoader() {
  gallery.innerHTML = '<span class="loader"></span>';
}

function resetLoader() {
  gallery.innerHTML = '';
}

export { renderGallery, resetGallery, renderLoader, resetLoader };
