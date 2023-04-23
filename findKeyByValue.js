//returns the first object key found based on the value
const findKeyByValue = function(object, value) {
  const objectKeys = Object.keys(object);
  //stores keys for object
  for (const key of objectKeys) {
    if (object[key] === value) {
      return key;
      //checks each key and returns if there is a matching value
    }
  }
  return undefined;
};

module.exports = findKeyByValue;