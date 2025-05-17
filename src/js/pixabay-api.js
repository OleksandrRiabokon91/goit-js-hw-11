import axios from 'axios';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query).Ця функція повинна приймати один параметр query
// (пошукове слово, яке є рядком), здійснювати HTTP - запит і повертати значення властивості data з отриманої відповіді.
// ! пример кода для спинера загрузки
function showLoader() {
  document.querySelector('#global-loader').style.display = 'flex';
}
function hideLoader() {
  document.querySelector('#global-loader').style.display = 'none';
}

axios.interceptors.request.use(cfg => {
  showLoader();
  return cfg;
});
axios.interceptors.response.use(
  resp => {
    hideLoader();
    return resp;
  },
  err => {
    hideLoader();
    throw err;
  }
);
