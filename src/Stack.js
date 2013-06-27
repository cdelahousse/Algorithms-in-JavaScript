/** 
 * A stack data structure with an API similar to the Java Stack interface
 * This data structure is just a facade for the array object
 * @constructor
 */
function Stack() {
  'use strict';

	var a = [],
			n = 0;

	this.isEmpty = function() {
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
		a[n] = x;
		n++;
		return x;
	};

}

if (module && module.exports) module.exports = Stack; 
