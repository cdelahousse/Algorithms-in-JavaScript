
var selectionSort = require('../src/selectionSort.js');

var lib = require('./lib.js');
var assert = lib.assert; 
var unsorted_collection = lib.unsorted_collection;
var sortedCollection = lib.sortedCollection; 

var a = unsorted_collection();
selectionSort(a);
assert(a, sortedCollection());
