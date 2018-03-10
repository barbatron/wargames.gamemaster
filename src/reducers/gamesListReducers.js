export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      console.log('gamesList> fetch games', action);
      return state;
    case 'FETCHED_GAMES':
      console.log('gamesList> fethced games', action);
      return state;
    default:
      return state;
  }
}
