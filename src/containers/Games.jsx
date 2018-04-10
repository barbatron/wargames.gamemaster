import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {requestGames} from '../actions/game';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Games extends Component {
  componentDidMount() {
    this.props.dispatch(requestGames());
  }

  render() {
    const {classes} = this.props;
    const {isFetchingGames, games} = this.props;
    const gameItems = (games || []).map(game => (<li key={game.id}>{game.name}</li>));
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} sm={2}>
          <div>
            <h4>isFetching?</h4>
            {isFetchingGames}
            <h4>Games</h4>
            <ul>
              {gameItems}
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={10}>
          Hello!
        </Grid>
      </Grid>
    );
  }
}

Games.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {isFetchingGames, games} = state.gamesList;
  return {
    isFetchingGames,
    games
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Games));
