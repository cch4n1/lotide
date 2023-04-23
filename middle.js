// Takes in an array and returns the middle elements as new array. If input array has odd number of elements, returns single middle element. If input array has even number of elements, returns two middle elements.
const middle = function(array) {
  // array to store middle elements
  const middleArray = [];
  // if less than or equal to 2 elements, return empty array
  if (array.length <= 2) {
    return middleArray;
  }

  //function to push to middle array
  const midArrPush = (indexPosition) => {
    middleArray.push(array[indexPosition]);
  };

  //if even number of elements, take 2 middle elements
  if (array.length % 2 === 0) {
    midArrPush(array.length / 2 - 1);
    midArrPush(array.length / 2);
  } else {
    //if odd number of elements, take single middle element
    midArrPush((array.length - 1) / 2);
  }

  return middleArray;

};

module.exports = middle;