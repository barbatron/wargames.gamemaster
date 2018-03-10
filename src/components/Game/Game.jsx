import React from 'react';
import {connect} from 'react-redux';

const Game = props => {
  return (<div>Game</div>);
};

const stateToProps = state => state.game;

export default connect(stateToProps)(Game);