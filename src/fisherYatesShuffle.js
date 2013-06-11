//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js'); 

	load('quickSort.js');
}

shuffle = extend(shuffle, {

	yatesFisher : function (collection) {

		var len = collection.length,
				//Position with which to swap
				pos;
		
		//collection = Array.prototype.slice.call(collection);

		for (i = len - 1; i > 0; i--) {
			pos = Math.floor(Math.random() * (i + 1)); //Between 0 and i
			swap(collection,pos, i);
		}
		return collection;
	}
});
console.log("Yates-Fisher Shuffled:");
console.log(shuffle.yatesFisher(sort.quickSortKandR(init_collection)));
