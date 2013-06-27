var swap = require('./lib.js').swap;

/**
 * Selection sort as defined on Wikipedia:
 * 1. Find the minimum value in the list -- See loop j
 * 2. Swap it with the value in the first position -- see end of loop i
 * 3. Repeat the steps above for the remainder of the list (starting at the
 *    second position and advancing each time) -- See loop i
 * @param {array} collection Unsorted array
 */

function selectionSort(collection) {
  'use strict';

  var len = collection.length,
      i,j,key;

  for (i = 0; i < len; i++) {
    /** Left most unsorted item */
    key = i;

    /** Find smallest in unsorted portion */
    for (j = i + 1; j < len; j++) {
      if (collection[key] > collection[j]) {
        key = j; 
      }
    } 

    swap(collection,i,key);
  } 
  return collection;
}

if (module && module.exports) module.exports = selectionSort;

