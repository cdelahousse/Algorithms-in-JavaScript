var fastExp = require('../src/fastExponentiation.js');
var assert = require('./lib.js').assert;

assert(fastExp(2,3), 8);
assert(fastExp(3,2), 9);

