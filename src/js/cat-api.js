import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_YX8J861pIuqquderL6038bNz7vV9JD2fzDxsRZDGder5OYd17GSkRkUS3EROZvFf';

const BASE_URL = ' https://api.thecatapi.com/v1';

export function fetchBreeds(breedId) {
  return axios.get(`${BASE_URL}/breeds`).then(resp => resp.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=1${breedId}`)
    .then(resp => resp.data[0]);
}
