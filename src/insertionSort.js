var swap = require('./lib.js').swap;

function insertionSort (collection) {
  var len = collection.length,
      key;

  for (var j = 0,i ; j < len; j++) {
    key = collection[j];

    i = j - 1; //Sorted parts starts right before current index
    while (i >= 0 && collection[i] > key){ //Sorted partial result
      collection[i+1] = collection[i]; //Shift right to make room
      if (key <= collection[i]) {
        collection[i] = key;
      }
      i--; //Sorting part works backwards
    }
  }
  return collection;
}

function insertionSort2 (collection) {
  var len = collection.length,
      i,j;

  for (i = 1; i < len; i++) {
    j = i;
    while (j > 0 && collection[j] < collection[j-1]) {
      swap(collection,j,j-1);
      j--;
    }
  }
  return collection;
}

if (module && module.exports) { 
  module.exports.insertionSort = insertionSort; 
  module.exports.insertionSort2 = insertionSort2;
}
