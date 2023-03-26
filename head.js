//assertEqual code
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
};


// start of head code

const head = function(arrInput) {
  const arrHead = arrInput[0];
  return arrHead;
};

// assertion tests

assertEqual(head([5,6,7]), 5);
//test assertion 1
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//test assertion 2
console.log(head([3]));
//An array with one element should yield that one element as its head
console.log(head([]));
//An empty array should yield undefined as its head

console.log(head([1, 2, 3]));