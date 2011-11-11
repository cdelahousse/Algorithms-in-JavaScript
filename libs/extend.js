
//Creates a new object from props that will inherit from target
//Similar to Object.create
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

