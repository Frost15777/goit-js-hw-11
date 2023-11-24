export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '40855799-bf33be6349e332f70260dbd75';

export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};