var swap = require('./lib.js').swap;

/**
 * Implicit Binary Heap implemented using Eytzinger's method.
 * Please see Open Data Structures ch10 for more details
 * @constructor
 */
function BinaryHeap() {

      /** Backing array */
	var a = [],

			/** Number of elements  */
			n = 0;

  /** 
   * Resize the array
   * Note: this isn't really needed for JS. 
   */
  // function resize() {
    // var b = new Array( Math.max(1, n*2) ),
        // i;

    // for (i = 0; i < n; i++) {
      // b[i] = a[i];
    // }

    // a = b;
  // }

  /**
   * Get index of left child of value at index i
   * @param {integer} i
   * @returns {integer}
   * @private
   */
	function left(i) {
		return i * 2 + 1;
	}

  /**
   * Get index of right child of value at index i
   * @param {integer} i
   * @returns {integer}
   * @private
   */
	function right(i) {
		return i * 2 + 2;
	}

  /**
   * Get index of the parent of value at index i
   * @param {integer} i
   * @returns {integer}
   * @private
   */
	function parent(i) {
		return Math.floor( (i-1)/2 );
	}

  /**
   * Get size of heap 
   * @returns {integer}
   * @public
   */
	this.size = function() {
		return n;
	};

  /**
   * Get size of heap 
   * @returns {integer}
   * @public
   */
  this.offer = function(x) {
    return this.add(x);
  };

  /**
   * Add value to heap
   * @returns {boolean}
   * @public
   */
	this.add = function(x) {
    // if (n + 1 > a.length ) resize(); 
    // a[n] = x;
    a.push(x);
		bubbleUp(n);
		n++;
		return true;
	};

  /**
   * Run the bubble up routine at position i
   * @param {integer} i
   * @private
   */
	function bubbleUp(i) {
		var p = parent(i);
		while (i > 0 && a[p] > a[i]) {
			swap(a, p, i);
			i = p;
			p = parent(p);
		}
	}

  /**
   * Peek at value at top of Binary heap
   * @public
   * @returns {object}
   */
  this.peek = function() {
    return a[0];
  };

  /**
   * Remove and return value at item at top of Binary heap
   * @public
   * @returns {object}
   */
  this.peek = function() {
    return remove(); 
  };

  /**
   * Remove and return value at item at top of Binary heap
   * @public
   * @returns {object}
   */
	this.remove = function() {
		var x = a[0];
		a[0] = a.pop();
		trickleDown(0);
		n--;
		// if (3*n < a.length) resize();
		return x;
	};

  /**
   * Restore Heap property starting from index i
   * @param {integer} i
   * @private
   */
	function trickleDown(i) {
		var l, r, j;

		do {
      j = -1;
      r = right(i);

      if (r < n && a[r] < a[i] ) {
        l = left(i);

        if ( a[l] < a[r] ) {
          j = l;
        } else {
          j = r;
        }

      } else {
        l = left(i);
        if ( l < n && a[l] < a[i] ) {
          j = l;
        }
      }

      if ( j >= 0 ) {
        swap(a, i, j);
      }

      i = j;
    } while ( i >= 0 );

	}

  /**
   * Clear the Heap of any values
   * @public
   */
  this.clear = function () {
    n = 0;
    a = [];
  };

  /**
   * Is the Heap empty?
   * @public
   * @returns {boolean}
   */
  this.isEmpty = function () {
    return n === 0;
  };

}

if (module && module.exports) module.exports = BinaryHeap; 

