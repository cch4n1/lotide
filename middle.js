// Takes in an array and returns the middle elements as new array. If input array has odd number of elements, returns single middle element. If input array has even number of elements, returns two middle elements. 
const middle = function(array) {
  let middleArray = [];
  // stores results
  if (array.length <= 2) {
    return middleArray;
    // if less than 2 elements, return empty array
  }

  if (array.length % 2 === 0) {
    middleArray.push(array[array.length / 2 - 1]);
    middleArray.push(array[array.length / 2]);
    //if even number of elements, get 2 middle elements
  } else {
    middleArray.push(array[(array.length - 1) / 2]);
    //if odd number of elements, get single middle element
  }

  return middleArray;
  
};

module.exports = middle;