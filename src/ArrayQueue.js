var NoSuchElementException = require('./lib').NoSuchElementException;

/**
 * Implementing something similar to the Java Queue interface using an array.
 * See Open Data Structures
 * http://opendatastructures.org/ods-java/2_3_ArrayQueue_Array_Based_.html
 */
function ArrayQueue() {
  'use strict';

      /** Array used to store the elements */
  var a = [],
      /** Number of elements in the queue */
      n = 0,
      /** Index in the array of the Queue's next value to dequeue */
      j = 0;

  /**
   * Grow the internal array 
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
   * Return an iterator for the elemets of the queue
   */
  this.iterator = function () {
    var that = this;

    /** Closure for unique iterator instances */
    return (function () {
      var k = 0;
      return {
        hasNext : function () {
          return k < n;
        },
        next : function () {
          if (that.isEmpty() || k >= n ) throw new NoSuchElementException();
          var x = a[ ( j + k ) % a.length ];
          k++;
          return x;
        },
        remove : function () {
          throw new Error('To Implement');
        }
      };
    })();
  };

  this.isEmpty = function() {
    return n === 0;
  };

  this.size = function() {
    return n;
  };

  this.offer = function(x) {
    return this.add(x);
  };

  this.add = function(x) {
    if (n + 1 > a.length) resize();

    /** Modulo of 0 is NaN */
    if (a.length === 0) {
      a[j] = x;
    } else {
      a[(j + n) % a.length] = x;
    }

    n++;
    return true;
  };

  this.peek = function() {
    var x = null;
    if (n > 0) {
      x = a[j];
    }
    return x;
  };

  this.remove = function() {
    if (n === 0) return false;

    var x = a[j];
    j = (j + 1) % a.length;
    n--;

    if (n <= 3*n) resize();

    return x;
  };

  this.poll = function() {
    return n === 0 ? null : this.remove();
  };
}

if (module && module.exports) module.exports = ArrayQueue;

