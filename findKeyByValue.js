//returns the first object key found based on the value
const findKeyByValue = function(object, value) {
  //stores keys for object
  const objectKeys = Object.keys(object);
  //loop through object keys
  for (const key of objectKeys) {
     //checks each key and returns if there is a matching value
    if (object[key] === value) {
      return key;
     
    }
  }
  return undefined;
};

module.exports = findKeyByValue;