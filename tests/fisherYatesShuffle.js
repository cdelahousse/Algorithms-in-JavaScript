'use strict';

var shuffle = require('../src/fisherYatesShuffle.js');

var lib = require('./lib.js');
var assert = lib.assert;

var sortedCollection = lib.sortedCollection();
var sortedCollection2 = lib.sortedCollection();

shuffle(sortedCollection);

assert(sortedCollection.some(function(e,i) {
  return sortedCollection[i] !== sortedCollection2[i];
}), true);

