import {CREATE_GAME, FETCH_GAME_LIST, JOIN_EXISTING_GAME} from '../actions/gameSelectionActions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_GAME_LIST:
      console.log('Im supposed to fetch list of games')
      return {games: {isFetching: true, items: []}, ...state};
    case CREATE_GAME:
      console.log('Im supposed to create a game');
      break;
    case JOIN_EXISTING_GAME:
      console.log('Im supposed to join an existing game');
      break;
    default:
      return state;
  }
};