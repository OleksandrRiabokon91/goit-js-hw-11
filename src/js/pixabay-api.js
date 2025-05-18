import axios from 'axios';

export async function getImagesByQuery(query) {
  const baseURL = 'https://pixabay.com';
  const endPoint = '/api/';
  const url = baseURL + endPoint;

  const params = {
    key: '50355121-f8c083c230eef48e4f2dd2afb',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  const { data } = await axios.get(url, { params });
  return data.hits;
}
