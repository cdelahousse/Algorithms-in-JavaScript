//This relies on the principle that a^n = (a^(n/2))^2

var math = require('./init.js').math,
		extend = require('./lib.js').extend;

math = extend(math, {
	fastExp : function fastExp(base,power) {
		function sqr(a) {return a*a;}
		return (power === 0) ? 1 :
			((power & 1) === 0) ?
				sqr(fastExp(base, power >> 1 ))  : //even (b^(pow/2))^2
				sqr(fastExp(base, power >> 1 )) * base; //odd b*(b^(pow/2))^2
		}
});

console.log(math.fastExp(2,3));
console.log(math.fastExp(3,2));
