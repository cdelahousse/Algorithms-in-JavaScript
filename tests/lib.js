/** @fileOverview Helpers for testing */

var _ = require('underscore');
/**
 * Simple testing function
 * @returns {function}
 */
module.exports.assert = (function() {
  var counter = 0;


   /** 
    * Test to see if the first argument matches the value of the second.
    * @param a1 The computed value
    * @param a2 The expected value
    * @returns {boolean}
    */
  return function (a1, a2) {
    return _.isEqual(a1, a2) ? 
      (console.log( ++counter + ") PASS"), true) :
      (console.log( ++counter + ") FAIL: " + a1 + ", expected: " + a2), false);
  };
})();

/** Unsorted collection, mock data */
var unsorted_collection =
    module.exports.unsorted_collection =
    function unsorted_collection () {
	return [11,9,0,6,2,1,3,5,0,5,30,14,11,2,5,70,11,23,11,0]; //Unsorted
};

/** Sorted version of that unsorted collection */
module.exports.sortedCollection = function() {
  return unsorted_collection().sort(function (a,b) {
    return a-b;
  });
};

