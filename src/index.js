import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {STATE_CONNECTING} from "./gameStates";
import {createStore} from 'redux';

import Root from './components/Root';

import {reducers} from './reducers/index';

const initialState = {
  gameState: STATE_CONNECTING,
  gamesList: {
    isFetching: false,
    items: []
  },
  gameSelection: {
    map: [],
    players: []
  }
};

const store = createStore(reducers, initialState);

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root'));
registerServiceWorker();
