const compile = require('../messageType').compile;

let counter = 0;

const sendMessageFor = (ws, namespace = null) => {
  return (type, payload) => {
    const messageType = compile({type, namespace});
    console.log(`Sending message of type ${type} (ns=${namespace}): ${JSON.stringify(payload)}`);
    const message = JSON.stringify({messageType, payload});
    return ws.send(message);
  };
};

const messageHandlerFor = (ws, messageHandlers, namespace = null) => {
  return (messageData) => {
    let messageStr = typeof messageData === 'string' ? messageData : messageData.data;
    if (typeof messageStr !== 'string') {
      console.log('Attempting to parse string', messageStr);
      messageStr = messageStr.data;
    }
    counter++;
    const message = JSON.parse(messageStr);
    console.log(`${counter}> Got message ${messageStr}`);

    // Establish namespace and type of message
    const messageType = message.messageType;
    if (!messageType) {
      console.warn(`${counter}> Unrecognized message: ${messageStr}`);
      return;
    }

    // Find and invoke registered handler for composed message type
    const qualifiedMessageType = namespace ? compile({type: messageType, namespace}) : messageType;
    console.log(`${counter}> Resolving message handler for type=${qualifiedMessageType}`);
    const handler = messageHandlers[qualifiedMessageType];

    if (handler) {
      console.log(`${counter}> Matching message handler: ${handler.name}`);
      const respondFn = (responseType, responsePayload) => {
        sendMessageFor(ws, namespace)(responseType, responsePayload);
      };
      handler(ws, message.payload, respondFn);
    } else {
      console.warn(`${counter}> No handler for message type ${messageType}. I only know these types: ${JSON.stringify(Object.keys(messageHandlers))}`);
    }
  };
};

const install = (ws, handlers, namespace = null) => {
  ws.sendMessage = sendMessageFor(ws, namespace);
  const messageCallback = messageHandlerFor(ws, handlers, namespace);
  if (typeof ws.on === 'function') {
    ws.on('message', messageCallback);
  } else {
    ws.onmessage = messageCallback;
  }
};

module.exports = {install};
