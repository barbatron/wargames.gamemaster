export const FETCH_GAME_LIST = 'FETCH_GAME_LIST';
export const CREATE_GAME = 'CREATE_GAME';
export const JOIN_EXISTING_GAME = 'JOIN_GAME';

export const fetchGameList = () => {
  return {
    type: FETCH_GAME_LIST
  };
};

export const createGame = gameName => {
  return {
    type: CREATE_GAME,
    gameName
  };
};

export const joinExistingGame = gameName => {
  return {
    type: JOIN_EXISTING_GAME,
    gameName
  };
};
