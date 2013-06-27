
//Knuth Morris Pratt string matching
function kmp(text,pattern) {
  'use strict';

	var tlen = text.length,
			plen = pattern.length,
			m = 0,//Beginning of current match
			i = 0; //Index of pattern

	//Build table
	var partialMatchTable = (function() {

		var table = new Array (plen),
			cnd = 0;

		table[0] = -1;
		table[1] = 0;

		var pos = 2; //Start at pos 2 of table because pos 0,1 are equal to -1,0

		while (pos < plen) {
			if (pattern[pos - 1] === pattern[cnd]) {
				cnd++;
				table[pos] = cnd;
				pos++;
			}
			else if (cnd > 0) {
				cnd = table[cnd]; //XXX ????
			}
			else {
				table[pos] = 0;
				pos++;
			}
		}

    return table;
	})();


	while (m+i < tlen) {
		if (text[m+i] === pattern[i]) { //pattern/text Character match
			if (i ===  plen - 1) { //End of pattern reached
				return m;
			}
			else {
				i++;
			}
		}
		else { //Char match fail
			//Where to start search from . m + index of chars matched - prefix offset
			//If i == 0, then pfxtbl[0] == -1, and m = m + 0 -(-1) == m + 1 -> next char
			//if i == 1, then pfxtbl[1] == 0, and m = m + 1 - 0 == m + 1 -> next char
			//if i > 1, then pfxtbl[i] is an offset.
			m = m + i - partialMatchTable[i];

			if (partialMatchTable[i] > -1 ) {
				//Start from offset (m + i where i >= 0)
				i = partialMatchTable[i];
			}
			else {//prfxTbl == -1 means failed on 1st char of pattern
				i = 0;
			}
		}
	} //End while

}


var s1 = "Double, double, toil and trouble",
		s2 = "il an";

console.log(kmp(s1,s2));
