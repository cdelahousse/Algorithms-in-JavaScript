var quickSort = require('../src/quickSort.js');
var quickSortArray = quickSort.quickSortArray;
var quickSortInPlaceRecursive = quickSort.quickSortInPlaceRecursive;

var assert = require('./lib.js').assert;

var unsorted_collection = require('./lib.js').unsorted_collection;

function num (a,b) {
  return a - b;
}

assert(quickSortArray(unsorted_collection()),
      unsorted_collection().sort(num));

assert(quickSortInPlaceRecursive(unsorted_collection()),
      unsorted_collection().sort(num));
