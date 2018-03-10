import './ws.messaging';
import {install} from "./ws.messaging";
import _ from 'lodash';

let ws;

const handlers = {
  'games-list': (client, payload) => {
    console.log('Got games list', payload);
    debugger
  },
  'enter-game': (client, payload) => {
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
  install(ws, handlers, 'admin');
};

