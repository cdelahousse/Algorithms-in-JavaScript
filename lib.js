
//Creates a new object that inherits from 'target' and adds properties
//from 'prop'. 
//Similar to native JS Object.create
//http://javascript.crockford.com/prototypal.html
module.exports.extend = function extend (target,props) {

	//Add members from props to function
	function F (p) {
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
	//var len = object.length;
	//if (len < i || len < j) { //Sanity checking
		//return false;
	//}
	var tmp = object[i];
	object[i] = object[j];
	object[j] = tmp;
};

//Generate unsorted collection
module.exports.unsorted_collection = function unsorted_collection () {
	return [11,9,0,6,2,1,3,5,0,5,30,14,11,2,5,70,11,23,11,0]; //Unsorted
};
