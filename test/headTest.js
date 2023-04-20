const assertEqual = require('../assertEqual');
const head = require('../head');

// assertion tests

assertEqual(head([5, 6, 7]), 5);
//test assertion 1
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//test assertion 2
assertEqual(head([3]), 3);
//An array with one element should yield that one element as its head
assertEqual(head([]), undefined);
//An empty array should yield undefined as its head
