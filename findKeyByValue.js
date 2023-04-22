//returns the first object key found based on the value
const findKeyByValue = function(object, value) {
  const objectKeys = Object.keys(object);

  for (const key of objectKeys) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;