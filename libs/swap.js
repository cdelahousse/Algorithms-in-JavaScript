//Swaps two of an enumerable object's elements (ie. arrays) 
function swap(object,i,j) {
	//var len = object.length;
	//if (len < i || len < j) { //Sanity checking
		//return false;
	//}
	var tmp = object[i];
	object[i] = object[j];
	object[j] = tmp;
}
