import {STATE_CONNECTING} from '../gameStates';
import {CONNECT_TO_SERVER} from '../actions/connectionActions';
import {connect} from '../util/serverConnection';

export default (state = {}, action) => {
  switch (action.type) {
    case CONNECT_TO_SERVER:
      console.log('They want us to connect!');
      connect('ws://localhost:8080');
      return {gameState: {name: STATE_CONNECTING}, ...state};
    default:
      return state;
  }
};

