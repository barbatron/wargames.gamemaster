import React, {Component} from 'react';
import GamePage from './pages/Game/GamePage';
import './App.css';

const testGame = {
  map: {
    northWest: {
      lng: 11.553122,
      lat: 59.669630
    },
    southEast: {
      lng: 18.495972,
      lat: 57.567507
    }
  },
  players: {
    'barbatron': {
      name: 'barbatron',
      location: {
        lng: 18.0685808,
        lat: 59.329323499999994
      }
    }
  }
};

class App extends Component {
  componentDidMount() {
    // TODO: Connect to backend and fetch game
    this.setState({
      game: testGame
    });
  }

  render() {
    if (!this.state.game) {
      return (<span>Initialising</span>);
    }
    return (<GamePage game={this.state.game}/>);
  }
}

export default App;
