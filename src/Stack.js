/** 
 * A stack data structure with an API similar to the Java Stack interface
 * See Open Data Structures
 * http://opendatastructures.org/ods-java/2_3_ArrayQueue_Array_Based_.html
 *
 * @constructor
 */
function Stack() {
	var a = [],
			n = 0;

	function resize(nn) {
		var len = nn || n,
				b = new Array( Math.max(1, len*2) ),
				i;

		for (i = 0; i < n; i++) {
			b[i] = a[i];
		}
		a = b;
	}

	this.empty = function() {
		return n === 0;
	};

	this.pop = function() {
		if (n === 0) return false;
		n--;
		return a.pop();
	};

	this.size = function() {
		return n;
	};

	this.peek = function() {
		if (n === 0) return false;
		return a[n-1];
	};

	this.push = function(x) {
		if (n + 1 > a.length) resize();
		a[n] = x;
		n++;
		return x;
	};

}

/** Export to global scope */
if (exports in module) module.exports = Stack; 
