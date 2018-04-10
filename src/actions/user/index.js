export const REQUEST_CURRENT_USER = 'REQUEST_CURRENT_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export function requestCurrentUser() {
  return {
    type: REQUEST_CURRENT_USER
  };
}

export function receiveCurrentUser(user) {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
}