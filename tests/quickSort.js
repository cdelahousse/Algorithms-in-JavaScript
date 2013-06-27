var quickSort = require('../src/quickSort.js');
var quickSortArray = quickSort.quickSortArray;
var quickSortInPlaceRecursive = quickSort.quickSortInPlaceRecursive;

var lib = require('./lib.js');
var assert = lib.assert;
var unsorted_collection = lib.unsorted_collection;
var sortedCollection = lib.sortedCollection;


assert(quickSortArray(unsorted_collection()), sortedCollection());

var a = unsorted_collection();
quickSortInPlaceRecursive(a);
assert(a, sortedCollection());
