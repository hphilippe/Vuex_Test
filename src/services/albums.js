import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchAlbumList = () => {
  return axios.get(`${API_BASE_URL}/albums`)
    .then(response => response.data);
};

export const fetchAlbumDetailList = (id) => {
  return axios.get(`${API_BASE_URL}/albums/${id}/photos`)
    .then(response => response.data);
};
