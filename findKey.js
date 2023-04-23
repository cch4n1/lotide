// returns the first object key that fulfills the requirements of callback
const findKey = function(object, callback) {
  //loop through object keys
  for (let key in object) {
    //check if value in object key meet requirement of callback function
    if (callback(object[key]))
      //if yes, return key
      return key;
  }
  //if no match, return undefined
  return undefined;
};

module.exports = findKey;