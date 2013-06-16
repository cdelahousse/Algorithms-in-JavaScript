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

var a = unsorted_collection();
quickSortInPlaceRecursive(a);
assert(a, unsorted_collection().sort(num));
