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

/**
 * In place Quicksort as implemented by K&R in 'The C Programming Language'
 * on pg. 87
 */
function quickSortInPlaceRecursive(unsorted_array) {

  //Recursive function
  function qs (a, left_index, right_index) { 
    /** Base case. Subset has 1 or less elements. */
    if (left_index >= right_index) return; 

    /** Pivot element Location */
    var pivot = Math.floor((left_index + right_index)/2);

    /** Move pivot element to leftmost location */
    swap(a, left_index, pivot); 

    /** Index of leftmost element larger than pivot element */
    var leftMostLarger = left_index;

    /** Partition array */
    for (var i = left_index + 1; i <= right_index; i++) {

      /** 
       * When current elem is smaller than pivot elem, swap it with rightmost
       * larger elem so that the current elem moves left to be the rightmost
       * smaller elem. 
       */
      if (a[left_index] > a[i]) {
        leftMostLarger = ++leftMostLarger;
        swap(a,i,leftMostLarger);
      }
    }

    /** Swap pivot elem with leftmost larger elem */
    swap(a,left_index,leftMostLarger); 

    /** Recur on separate partitions */
    qs(a,left_index,leftMostLarger-1); 
    qs(a,leftMostLarger+1,right_index); 
  }

  /** Copy array, not the reference */
  var newarray = unsorted_array.slice(0);

  /** Start Recuring on the entire array */
  qs(newarray,0,newarray.length);
  return newarray;
}

/** Export to global scope */
if (module && module.exports) { 
  module.exports.quickSortArray = quickSortArray; 
  module.exports.quickSortInPlaceRecursive = quickSortInPlaceRecursive;
}
