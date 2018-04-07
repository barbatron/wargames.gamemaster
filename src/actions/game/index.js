export const REQUEST_GAMES = 'REQUEST_GAMES';
export const RECEIVE_GAMES = 'RECEIVE_GAMES';

export const REQUEST_GAME = 'REQUEST_GAME';
export const RECEIVE_GAME = 'RECEIVE_GAME';

export function requestGames() {
  return {
    type: REQUEST_GAMES
  };
}

export function receiveGames(games) {
  return {
    type: RECEIVE_GAMES,
    games
  };
}

export function requestGame(gameId) {
  return {
    type: REQUEST_GAME,
    gameId
  };
}

export function receiveGame(game) {
  return {
    type: RECEIVE_GAME,
    game
  };
}

