import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const mapCenter = (map) => {
  const centerLat = (map.northWest.lat + map.southEast.lat) / 2;
  const centerLng = (map.northWest.lng + map.southEast.lng) / 2;
  return { lat: centerLat, lng: centerLng };
};

const GameMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={mapCenter(props.map)}>
    {Object.entries(props.game.players)
      .forEach(player => <Marker position={player.position} />)}
  </GoogleMap>
));

export default GameMap;