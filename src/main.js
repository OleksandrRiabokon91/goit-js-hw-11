import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const query = input.value.trim();

  if (query.length < 1) {
    iziToast.info({
      message: 'Search field is empty. Please type a keyword.',
      position: 'topRight',
      timeout: 3000,
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(hits => {
      if (!hits.length) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 4000,
        });
        return;
      }
      createGallery(hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Network error. Please try later.',
        position: 'topRight',
        timeout: 4000,
      });
    })
    .finally(() => {
      hideLoader();
    });
}
