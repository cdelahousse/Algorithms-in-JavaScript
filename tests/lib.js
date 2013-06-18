/** @fileOverview Helpers for testing */

var _ = require('underscore');

/** @namespace */
var lib = {};

/**
 * Simple testing function
 * @returns {function}
 */
lib.assert = (function() {
  var counter = 0;

   /** 
    * Test to see if the first argument matches the value of the second.
    * @param computed The computed value
    * @param expected The expected value
    * @returns {boolean}
    */
  return function (computed, expected) {
    return _.isEqual(computed, expected) ? 
      (console.log( ++counter + ") PASS"), true) :
      (console.log( ++counter + ") FAIL: " + computed + ", expected: " + expected), false);
  };
})();

/** Unsorted collection, mock data */
var unsorted_collection =
    lib.unsorted_collection =
    function unsorted_collection () {
	return [11,9,0,6,2,1,3,5,0,5,30,14,11,2,5,70,11,23,11,0]; //Unsorted
};

/** Sorted version of that unsorted collection */
lib.sortedCollection = function() {
  return unsorted_collection().sort(function (a,b) {
    return a-b;
  });
};

/**
 * Generate an array of random numbers
 * @param {integer} n The number of numbers to generate
 * @param {integer} m The upper bound on the numbers
 * @returns {array}
 */
lib.generateRandomNumbers = function (n,m) {
  var max = m || 100;
  var number = n || 1000;
  var a = [];

  for (var i = 0; i < number; i++) {
    a[i] = Math.floor( Math.random() * max );
  }
  return a;
};

/** Expose */
module.exports = lib;

