const eqArrays = function(arr1, arr2) {
  //if array1 or array2 is falsey (undefined, null)
  
  if (!arr1 || !arr2) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};


console.log(letterPositions("hello"));
console.log(letterPositions("hello hi hello"));

assertArraysEqual(letterPositions("hello").e, [1]);