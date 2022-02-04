import axios from 'axios';

const PATH = 'https://gateway.marvel.com/v1/public/comics';

export const getComics = (params) =>
  axios.get(PATH, { params: { ...params, apikey: process.env.REACT_APP_KEY } });
