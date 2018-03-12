const compile = (parts) => {
  return parts.namespace ? `${parts.namespace}.${parts.type}` : parts.type;
};

const decompile = (messageType) => {
  const parts = messageType.split('.');
  return parts.length > 1
    ? {namespace: parts[0], type: parts[1]}
    : {type: parts[0]};
};

module.exports = {compile, decompile};
