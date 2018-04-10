import {combineReducers} from 'redux'
import {RECEIVE_GAMES, REQUEST_GAMES} from '../actions/game';
import {RECEIVE_CURRENT_USER, REQUEST_CURRENT_USER} from '../actions/user';
import {routerReducer} from 'react-router-redux'

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

function user(state = {
  isFetchingUser: false,
  currentUser: null
}, action) {
  switch (action.type) {
    case REQUEST_CURRENT_USER:
      return {...state, isFetchingUser: true};
    case RECEIVE_CURRENT_USER:
      return {...state, isFetchingUser: false, current: action.user};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routerReducer,
  gamesList,
  user
});

export default rootReducer;
