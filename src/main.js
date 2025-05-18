// main.js
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

/**
 * Обработчик submit формы.
 * — локальная валидация (trim, ≥2 символов);
 * — очистка предыдущей галереи и показ лоадера;
 * — HTTP-запрос, обработка then/catch;
 * — iziToast-уведомления и рендер карток.
 */
function onSearch(e) {
  e.preventDefault();

  const query = input.value.trim();

  /* ===== 1. Валидация до запроса ============================== */
  if (query.length < 1) {
    iziToast.info({
      message: 'Search field is empty. Please type a keyword.',
      position: 'topRight',
      timeout: 3000,
    });
    return;
  }

  /* ===== 2. Подготовка UI (очистка + спинер) ================== */
  clearGallery();
  showLoader();

  /* ===== 3. HTTP-запрос к Pixabay ============================= */
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
      createGallery(hits); // добавляем разметку за 1 вставку
    })
    .catch(() => {
      iziToast.error({
        message: 'Network error. Please try later.',
        position: 'topRight',
        timeout: 4000,
      });
    })
    .finally(() => {
      hideLoader(); // убираем спинер в любом случае
    });
}
