
//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('libs/extend.js'); 
	load('libs/swap.js');

	//Rhino isn't the browser,so create console object
	if (typeof console != "object") {
		var console = {};
		console.log = print;
	}

}

//If container objects don't exist, create them
if (!sort || !shuffle) {
	var sort = {}, //Will house all sorting algorithms
		shuffle = {},
		init_collection = [11,9,0,6,2,1,3,5,0,5,30,14,11,2,5,70,11,23,11,0]; //Unsorted
}

