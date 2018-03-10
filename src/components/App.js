import './App.css';

import React from 'react';

import {connect} from 'react-redux';
import {connectToServer} from '../actions/connectionActions';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(connectToServer());
  }

  render() {
    console.log('App rendering with props', this.props);
    return (<div>Connecting: {this.props.gameState}</div>);
  }
}

const stateToProps = state => {
  return {
    gameState: state.gameState.name
  };
};

export default connect(stateToProps)(App);
