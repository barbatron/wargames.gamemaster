import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const pathToUrl = path => `${BASE_URL}${path}`;

export const fetchCurrentUser = () => {
  return axios.get(pathToUrl('/users/1')).then(resp => resp.data);
};

export const fetchGames = () => {
  return axios.get(pathToUrl('/games')).then(resp => resp.data);
};

export const fetchGame = id => {
  return axios.get(pathToUrl(`/games/${id}`));
};

export const createGame = game => {
  return axios.post(pathToUrl('/games'), game);
};

export default {
  fetchCurrentUser,
  fetchGames,
  fetchGame,
  createGame
};