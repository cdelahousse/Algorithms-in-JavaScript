
var gnomeSort = require('../src/gnomeSort.js');

var lib = require('./lib.js');
var assert = lib.assert;
var unsorted_collection = lib.unsorted_collection;
var sortedCollection = lib.sortedCollection;

var a = unsorted_collection();
gnomeSort(a);
assert(a, sortedCollection());
