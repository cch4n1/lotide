//Get everything except the first element of an array.
const tail = function(arrInput) {

  if (arrInput.length <= 1) {
    return []
  }
  //if less than 2 elements, returns empty array

  const arrTail = arrInput.slice(1);
  return arrTail;
  //if more than one element, returns everything except first element
};

module.exports = tail;