//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js'); 

}

sort = extend(sort, {

	gnomeSort : function (collection) {
		//Selection sort as defined on http://dickgrune.com/Programs/gnomesort.html:
		//1. if pair at indices i - 1 and i are in order,
		//examine next pair (increment i index)
		//2. if pair not in order, swap and examine previous pair (decrement index)
		//Boundry cases: 
		//1. If at left most element, increment index.
		//2. If at right most index, stop.
	
		var len = collection.length,
				i=0;

		while (i < len) {
			if (i == 0 || collection[i-1] <= collection[i]){
				i++;
			}
			else {
				swap(collection,i, i - 1);
				i--;
			}
		}

		return collection;
	} //end sort
});

//Test
print(sort.gnomeSort(init_collection));
