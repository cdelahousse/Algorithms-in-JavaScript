
var Deque = require('../src/ArrayDeque.js');
var lib = require('./lib.js');
var assert = lib.assert;

var d = new Deque();

var size = 1000;

assert(d.size(), 0);
assert(d.isEmpty(), true);

var i;
for (i = 0; i < size; i++) {
  if (Math.random() > 0.5) {
    d.add(2*i);
  } else {
    d.add(i, 2*i);
  }
}

assert(d.isEmpty(), false);
assert(d.size(), size);


for (var j = d.size(), mid = Math.floor(d.size() / 2); j > mid; j--) {
  if (Math.random() > 0.5) {
    d.remove();
  } else {
    d.remove(j-1);
  }

}


assert(d.size(), mid);

assert(d.remove(), 2*(j-1));

d.clear();

assert(d.size(), 0);
assert(d.isEmpty(), true);

/** Test adding to random positions */
var flag = true;
var testArray = [];
var idx;
for (var l = 0; l < size; l++) {
  if (Math.random() > 0.5) {
    idx = d.size();
    d.add(2*l);
    testArray.push(2*l);

  } else {
    idx = Math.floor(Math.random() * l) ;
    d.add(idx, 2*l);
    testArray.splice(idx, 0, 2*l);
  }

  flag = flag && d.get(idx) === testArray[idx];

}
assert(flag, true);
assert(d.size(), size);

