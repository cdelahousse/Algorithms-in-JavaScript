
var Queue = require('../src/ArrayQueue.js');
var lib = require('./lib.js');
var assert = lib.assert;

var q = new Queue();

//Some test vals
var size = 1000;
var start = 2*1;
var endVal = 'a';

assert(q.poll(), null);
assert(q.remove(), false);

for (var i = 1; i <= size; i++) {
  if ( i % 2 === 0) {
    q.add(2*i);
  } else {
    q.offer(2*i);
  }
}

assert(q.size(), size);

assert(q.remove(), start);

assert(q.size(), --size );

q.add(endVal);

for (var j = 0; j < size; j++) {
  q.remove();
}

assert(q.size(), 1);
assert(q.peek(), endVal);
assert(q.poll(), endVal);

