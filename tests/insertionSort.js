var insertionSort = require('../src/insertionSort.js').insertionSort;
var insertionSort2 = require('../src/insertionSort.js').insertionSort2;

var lib = require('./lib.js');
var assert = lib.assert;
var unsorted_collection = lib.unsorted_collection;
var sortedCollection = lib.sortedCollection;

var a = unsorted_collection();
insertionSort(a);
assert(a, sortedCollection());

var a = unsorted_collection();
insertionSort2(a);
assert(a, sortedCollection());
