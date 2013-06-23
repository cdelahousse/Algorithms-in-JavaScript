/**
 * Implementing something similar to the Java Queue interface using an array.
 * See Open Data Structures
 * http://opendatastructures.org/ods-java/2_3_ArrayQueue_Array_Based_.html
 */
function ArrayQueue() {
	var a = [],
			n = 0,
			j = 0;

	function resize() {
		var b = new Array( Math.max(1, n*2) ),
				k;

		for (k = 0; k < n; k++) {
			b[k] = a[ (j + k) % a.length ];
		}

		a = b;
		j = 0;
	}

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

		// Modulo of 0 is NaN
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

