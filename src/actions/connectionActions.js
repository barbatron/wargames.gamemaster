export const CONNECT_TO_SERVER = 'CONNECT_TO_SERVER';
export const CONNECTED_TO_SERVER = 'CONNECTED_TO_SERVER';

export const connectToServer = () => {
  return {
    type: CONNECT_TO_SERVER
  };
};

export const connectedToServer = connection => {
  return {
    type: CONNECTED_TO_SERVER,
    connection
  };
};
