//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js'); 

}


sort = extend(sort, {

	insertionSort : function (collection) {
		var len = collection.length,
		key;

		for (var j = 0,i ; j < len; j++) {
			//print(j);
			//print(collection);
			key = collection[j];

			i = j - 1; //Sorted parts starts right before current index
			while (i >= 0 && collection[i] > key){ //Sorted partial result
				collection[i+1] = collection[i];
				if (key <= collection[i]) {
					collection[i] = key;
				}
				i--; //Sorting part works backwards
			}
		}
		return collection;
	} //end insertionSort

});

//Test
print(sort.insertionSort(init_collection));
