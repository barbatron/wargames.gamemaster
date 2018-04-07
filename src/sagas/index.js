/* eslint-disable no-constant-condition */

import {call, put, takeEvery} from 'redux-saga/effects'
import {receiveGames, REQUEST_GAMES} from '../actions/game'
import api from '../api'

function* fetchGames() {
  const games = yield call(api.fetchGames);
  yield put(receiveGames(games));
}

export default function* rootSaga() {
  yield takeEvery(REQUEST_GAMES, fetchGames);
}