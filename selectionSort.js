//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js'); 

}


sort = extend(sort, {

	selectionSort : function (collection) {
		//Selection sort as defined on Wikipedia:
		//1. Find the minimum value in the list -- See loop j
		//2. Swap it with the value in the first position -- see end of loop i
		//3. Repeat the steps above for the remainder of the list (starting at the second
		//position and advancing each time) -- See loop i
	
		var len = collection.length,
				i,j,key;
		for (i = 0; i < len; i++) {
			key = i; //Left most unsorted item
			
			for (j = i + 1; j < len; j++) {
				if (collection[key] > collection[j]) {
					key = j; //Smallest of compared items
				}
			} //End j loop

			//Once the j loop is complete, swap smallest (key) with leftmost unsorted
			swap(collection,i,key);
		} //End i loop
		return collection;
	} //end sort
});

//Test
print(sort.selectionSort(init_collection));

//See:
//Cormen, Leiserson, Rivest, Stein. Introduction to Algorithms (2nd ed.)
//Exercise 2.2-2, pp.29

//Wikipedia article: http://en.wikipedia.org/wiki/Selection_sort
