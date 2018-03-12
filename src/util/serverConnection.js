import './ws.messaging';
import {install} from "./ws.messaging";
import _ from 'lodash';

const messageTypes = {
  GAMES_LIST: 'admin.games-list',
  ENTER_GAME: 'admin.enter-game'
};

let ws;

const handlers = {
  [messageTypes.GAMES_LIST]: (client, payload) => {
    console.log('Got games list', payload);
    debugger
  },
  [messageTypes.ENTER_GAME]: (client, payload) => {
    console.log('Entering game', payload);
    debugger
  }
};

const onOpened = (ws, ev) => {
  console.log('connection opened');
  install(ws, handlers, 'admin');

  // Establish connection as admin:
  ws.sendMessage('connect');
};

export const connect = url => {
  ws = new WebSocket(url);
  ws.onopen = _.partial(onOpened, ws);
};

