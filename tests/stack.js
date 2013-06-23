
var Stack = require('../src/Stack.js');
var lib = require('./lib.js');
var assert = lib.assert;

var s = new Stack();

//Some test vals
var size = 1000;

assert(s.size(), 0);

for (var i = 0; i<size; i++ ) {
  s.push(2*i);
}

assert(s.size(), size);

assert(s.pop(), 2*(i-1));
assert(s.size(), --size);

for (var j = s.size(), mid = Math.floor(s.size() / 2); j > mid; j--) {
  s.pop();
}
assert(s.size(), mid);

assert(s.pop(), 2*(j-1));

while (!s.empty()) {
  s.pop()
}

assert(s.size(), 0);
