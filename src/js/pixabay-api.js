// функції для HTTP-запитів
const API_KEY = `30636701-b7bfaf1719dc5d89c8acde7b5`;
const BASE_URL = `https://pixabay.com/api/`;

const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

function getPhotos(query) {
  return fetch(`${BASE_URL}?${searchParams}&q=${query}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export { getPhotos };
