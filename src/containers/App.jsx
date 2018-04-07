import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestGames} from '../actions/game';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(requestGames());
  }

  render() {
    const {isFetchingGames, games} = this.props;
    const gameItems = (games || []).map(game => (<li>{game.name}</li>));
    return (
      <div>
        <h4>isFetching?</h4>
        {isFetchingGames}
        <h4>Games</h4>
        <ul>
          {gameItems}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {isFetchingGames, games} = state.gamesList;
  return {
    isFetchingGames,
    games
  };
}

export default connect(mapStateToProps)(App);
