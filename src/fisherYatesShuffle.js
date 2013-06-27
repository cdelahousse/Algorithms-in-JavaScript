var swap = require('./lib.js').swap;

/** In place Fisher Yates Shuffle
 * @param {array} collection
 */
function shuffle (collection) {
  'use strict';

  var len = collection.length,
      pos,
      i;

  for (i = len - 1; i > 0; i--) {
    pos = Math.floor(Math.random() * (i + 1)); //Between 0 and i
    swap(collection,pos, i);
  }
  return collection;
}

if (module && module.exports) module.exports = shuffle;

