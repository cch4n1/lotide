//Get everything except the first element of an array.
const tail = function(arrInput) {
  //if less than 2 elements, returns empty array
  if (arrInput.length <= 1) {
    return []
  }
 //if more than one element, returns everything except first element
  const arrTail = arrInput.slice(1);
  return arrTail;
};

module.exports = tail;