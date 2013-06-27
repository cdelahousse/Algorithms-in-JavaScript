var IndexOutOfBoundsException = require('./lib.js').IndexOutOfBoundsException;

/**
 * A double ended queue implemented using arrays.
 * See Open Data Structures
 * http://opendatastructures.org/ods-java/2_4_ArrayDeque_Fast_Deque_O.html
 */
function ArrayDeque() {
  'use strict';

      /** Backing array */
  var a = [],

      /** Number of elements in Deque */
      n = 0,

      /** Index of Deque's first element */
      j = 0;

  /**
   * Grow the internal array
   * @private
   */
  function resize() {
    var b = new Array( Math.max(1, n*2) ),
        k;

    for (k = 0; k < n; k++) {
      b[k] = a[ (j + k) % a.length ];
    }

    a = b;
    j = 0;
  }

  /**
   * Returns the number of elems
   * @returns {number}
   * @public
   */
  this.size = function() {
    return n;
  };

  /**
   * Get the elem at index i.
   * @param {number} i The index of the value returned
   * @throws {IndexOutOfBoundsException}
   * @public
   */
  this.get =  function (i) {
    if (i < 0 || i > n-1 ) throw new IndexOutOfBoundsException();
    return a[ (j+i) % a.length ];
  };

  /**
   * Set the value of the elem at index i.
   * @param {number} i The index of the value returnd
   * @param x The value of the elem to set
   * @returns The previous value at index i;
   * @throws {IndexOutOfBoundsException}
   * @public
   */
  this.set = function (i, x) {
    if (i < 0 || i > n-1 ) throw new IndexOutOfBoundsException();
    var idx = (j + i) % a.length;
    var y = a[idx];
    a[idx] = x;
    return y;
  };


  /** @TODO document optional args */
  /**
   * Insert an element at index i;
   * @param {number} i The index of inserted value. Can be +1 more than size().
   * @throws {IndexOutOfBoundsException}
   * @public
   */
  this.add = function (i, x) {

    /** Variable parameters */
    if ( arguments.length === 1 ) {

      x = i;
      /** Index to add is at end */
      i = n;
    }

    if (i < 0 || i > n ) throw new IndexOutOfBoundsException();
    if (n + 1 > a.length) resize();

    var len = a.length,
        k;

    /** Shift elements left */
    if ( i < Math.floor(n / 2)) {
      /**
       * New first elem index. j-1 mod a.length.
       * Explicit here b/c modulo implementation in JS is not correct
       */
      j = ( j === 0 ) ? len - 1 : j - 1;

      for (k = 0; k <= i-1; k++) {
        a[ (j + k) % len ] = a[ (j + k + 1)  % len];
      }

    /** Shift elements right */
    } else {
      for (k = n; k > i; k--) {
        a[ (j + k + 1) % len ] = a[ (j + k)  % len];
      }
    }

    a[ (j + i) % len ] = x;
    n++;
  };


  /**
   * Remove the element at index i and return it's value.
   * @param {number} [i=size()] The index of the value removed
   * @returns The value of the removed element
   * @throws {IndexOutOfBoundsException}
   * @public
   */
  this.remove = function(i) {
    if (i === undefined) i = n - 1;
    if (i < 0 || i > n - 1 ) throw new IndexOutOfBoundsException();

    var len = a.length,
        x = a[ ( j + i ) % len ],
        k;

    if ( i < Math.floor( n / 2 ) ) {

      /** Shift elements right by one */
      for (k = i; k > j; k--) {
        a[ ( j + k ) % len ] = a[ ( j + k - 1 ) % len ];
      }

      j = ( j + 1 ) % len;

    } else {

      /** Shift elements left by one */
      for ( k = i; k <= n - 1; k++ ) {
        a[ ( j + k ) % len ] = a[ ( j + k + 1 ) % len];
      }
    }

    n--;
    if (n <= 3*n) resize();

    return x;
  };


  this.clear = function() {
    n = 0;
    resize();
  };

  this.isEmpty = function() {
    return n === 0;
  };

}

if (module && module.exports) module.exports = ArrayDeque;

