import connectionReducers from './connectionReducers';
import gameSelectionReducers from './gameSelectionReducers';
import gamesListReducers from './gamesListReducers';
import {combineReducers} from 'redux';

export const reducers = combineReducers({
  gameState: connectionReducers,
  gamesList: gamesListReducers,
  gameSelection: gameSelectionReducers
});
