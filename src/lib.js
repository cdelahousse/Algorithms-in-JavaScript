
//Creates a new object that inherits from 'target' and adds properties
//from 'prop'.
//Similar to native JS Object.create
//http://javascript.crockford.com/prototypal.html
module.exports.extend = function extend (target,props) {
  'use strict';

	//Add members from props to function
	function F (p) {
    /* jshint -W089 */
		for (var member in p) {
			this[member] = p[member];
		}
	}

	//Inherit from target
	F.prototype = target;

	//New object
	return new F(props);
};

//Swaps two of an enumerable object's elements (ie. arrays)
module.exports.swap = function swap(object,i,j) {
  'use strict';

	var tmp = object[i];
	object[i] = object[j];
	object[j] = tmp;
};

module.exports.IndexOutOfBoundsException = function (msg){
  'use strict';
  return new Error(msg);
};

module.exports.NoSuchElementException = function (msg){
  'use strict';
  return new Error(msg);
};

/**
 * Default  comparator. 
 * returns {number}
 */
module.exports.DefaultComparator = {
  compare : function (lhs, rhs) {
    'use strict';

    if ( lhs > rhs ) return 1;
    else if ( lhs < rhs ) return -1;
    else if ( lhs === rhs ) return 0;
    // else throw new Error();
  },
  equals : function (lhs, rhs) {  'use strict'; return lhs === rhs; }
};
