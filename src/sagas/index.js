/* eslint-disable no-constant-condition */

import {call, put, select, takeEvery} from 'redux-saga/effects'
import {push} from 'react-router-redux';
import {receiveGames, REQUEST_GAMES} from '../actions/game'
import {RECEIVE_CURRENT_USER, receiveCurrentUser, REQUEST_CURRENT_USER} from "../actions/user";
import api from '../api'

function* fetchGames() {
  const games = yield call(api.fetchGames);
  yield put(receiveGames(games));
}

function* fetchCurrentUser() {
  const user = yield call(api.fetchCurrentUser);
  yield put(receiveCurrentUser(user));
}

// On user switch, navigate to games list
function* onCurrentUserSet() {
  const currentUser = yield select(state => state.user.current);
  console.log('current user set', currentUser);
  yield put(push('/games'));
}

export default function* rootSaga() {
  yield takeEvery(REQUEST_GAMES, fetchGames);
  yield takeEvery(REQUEST_CURRENT_USER, fetchCurrentUser);
  yield takeEvery(RECEIVE_CURRENT_USER, onCurrentUserSet);
}