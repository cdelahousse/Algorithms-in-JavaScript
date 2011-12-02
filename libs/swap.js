//Swaps enumerable object's (ie. arrays) elements
function swap(object,i,j) {
	var len = object.length;
	//if (len < i || len < j) { //Sanity checking
		//return false;
	//}

	var tmp = object[i];
	object[i] = object[j];
	object[j] = tmp;

}
