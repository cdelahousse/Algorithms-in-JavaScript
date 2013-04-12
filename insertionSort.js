var sort = require('./init.js').sort,
		swap = require('./lib.js').swap,
		extend = require('./lib.js').extend;

sort = extend(sort, {

	insertionSort : function (collection) {
		var len = collection.length,
		key;

		for (var j = 0,i ; j < len; j++) {
			key = collection[j];

			i = j - 1; //Sorted parts starts right before current index
			while (i >= 0 && collection[i] > key){ //Sorted partial result
				collection[i+1] = collection[i]; //Shift right to make room
				if (key <= collection[i]) {
					collection[i] = key;
				}
				i--; //Sorting part works backwards
			}
		}
		return collection;
	},

	insertionSort2 : function (collection) {
		var len = collection.length,
				i,j;

		for (i = 1; i < len; i++) {
			j = i;
			while (j > 0 && collection[j] < collection[j-1]) {
				swap(collection,j,j-1);
				j--;
			}
		}
		return collection;
	}

});

//Test
var unsorted_collection = require('./lib').unsorted_collection();
console.log(sort.insertionSort2(unsorted_collection));
