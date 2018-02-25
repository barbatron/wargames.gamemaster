import React from 'react';

const GOOGLE_MAP_API_URL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places';

const GamePage = (props) =>
  <div className={'game-page'} style="display: flex;">
    <GameMap map={props.game.map}
             players={props.game.players}
             googleMapURL={GOOGLE_MAP_API_URL}
             loadingElement={<div style={{height: `100%`}}/>}
             containerElement={<div style={{height: `400px`}}/>}
             mapElement={<div style={{height: `100%`}}/>}
    />
    {/*<PlayerList players={this.props.game.players}/>*/}
  </div>;

export default GamePage;
