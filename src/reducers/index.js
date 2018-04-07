import {combineReducers} from 'redux'
import {RECEIVE_GAMES, REQUEST_GAMES} from '../actions/game';

function gamesList(state = {
  isFetchingGames: false,
  games: []
}, action) {
  switch (action.type) {
    case REQUEST_GAMES:
      return {...state, isFetchingGames: true};
    case RECEIVE_GAMES:
      return {...state, isFetchingGames: false, games: action.games};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  gamesList
});

export default rootReducer;
