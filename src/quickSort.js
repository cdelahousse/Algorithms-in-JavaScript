var swap = require('./lib.js').swap;

//Quicksort using new arrays
function quickSortArray(unsorted_array) {
  var len = unsorted_array.length;

  /** Base case */
  if (len <= 1) {
    return unsorted_array; }

  var mid,
      left = [],
      right = [];

  /** Middle element chosen as pivot for improved worst case scenario
      See left sidebar: http://en.wikipedia.org/wiki/Quicksort */
  mid = Math.floor(len/2);

  swap(unsorted_array,mid,0); //Move pivot to beginning, out of way

  for (var i = 1; i < len; ++i) {
    if(unsorted_array[i] < unsorted_array[0]) {
      left.push(unsorted_array[i]) ;
    } else {
      right.push(unsorted_array[i]);
    }
  }

  /** Concatenate everything as we return from the recursion */
  return quickSortArray(left).concat(unsorted_array[0],quickSortArray(right));
}

//Quicksort as implemented by K&R in 'The C Programming Language' pg. 87
//No new array creation
function quickSortKandR(unsorted_array) {

  //Copy array, not the reference
  var newarray = unsorted_array.slice();

  qsKR(newarray,0,newarray.length);
  return newarray;

  function qsKR (a, left_index, right_index) { 
    if (left_index >= right_index) 
      return; //Subset has 1 or less elements. Stop sorting

    var len =a.length,
        last = left_index,
        i;

    //Move pivot element to leftmost. Pivot is middle element
    swap(a,left_index,Math.floor((left_index + right_index)/2)); 

    //Note: pivot is now unsorted_array[left_index])

    for (i = left_index + 1; i <= right_index; i++) {
      if (a[left_index] > a[i])
        swap(a,i,++last);
    }
    swap(a,left_index,last); //Move pivot into order

    qsKR(a,left_index,last-1); //recur on lower/left partition
    qsKR(a,last+1,right_index); //recur on higher/right partion

  }
}

/** Export to global scope */
if (module && module.exports) { 
  module.exports.quickSortArray = quickSortArray; 
  module.exports.quickSortKandR = quickSortKandR; 
}

