var swap = require('./lib.js').swap;

/**
 * In place Gnome sort as defined here http://dickgrune.com/Programs/gnomesort.html
 *
 * 1. if pair at indices i - 1 and i are in order, examine next pair (increment i index) 
 * 2. if pair not in order, swap and examine previous pair (decrement index) 
 *
 * Boundry cases:
 *  1. If at left most element, increment index.  
 *  2. If at right most index, stop.
 *
 * @param {array} collection unsorted
 */
function gnomeSort (collection) {
  'use strict';

  var len = collection.length,
      i=0;

  while (i < len) {
    if (i === 0 || collection[i-1] <= collection[i]){
      i++;
    }
    else {
      swap(collection,i, i - 1);
      i--;
    }
  }
} 

if (module && module.exports) module.exports = gnomeSort;
