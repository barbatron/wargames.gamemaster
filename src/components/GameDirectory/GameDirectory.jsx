import React from 'react';
import {connect} from 'react-redux';

class GameDirectory extends React.Component {
  render() {
    // const gameNames = this.props.games.map(game => <div class="game">{game.name}</div>);
    return (
      <div>Game directory: blah</div>
    );
  }
}

function stateToProps(state) {
  return {games: state.games};
}

export default connect(stateToProps)(GameDirectory)