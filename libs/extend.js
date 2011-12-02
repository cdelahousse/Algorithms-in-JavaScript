
//Creates a new object that inherits from 'target' and adds properties
//from 'prop'. 
//Similar to native JS Object.create
//http://javascript.crockford.com/prototypal.html
function extend (target,props) {

	//Add members from props to function
	function F (p) {
		for (member in p) {
			this[member] = p[member];
		};
	}

	//Inherit from target
	F.prototype = target;

	//New object
	return new F(props);
}

