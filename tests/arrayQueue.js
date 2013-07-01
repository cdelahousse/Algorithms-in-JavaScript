
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

// Populate queue
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



// Testing iterator
var q2 = new Queue();
var size2=1000;

// Populate queue
for (var l = 1; l <= size2; l++) {
  if ( l % 2 === 0) {
    q2.add(2*l);
  } else {
    q2.offer(2*l);
  }
}

var iter = q2.iterator();
assert(iter.hasNext(), true);

var x;
for ( var m = 1, mid = Math.floor(size2/2); m <= mid; m++){
  x = iter.next();
}

x = iter.next();
assert(x, 2*m);

var y;
for (var n = mid+1; n < size2 - 1; n++) {
  y = iter.next();
}

assert(y, 2*n);

assert(iter.hasNext(),true);

n++;
assert(iter.next(), 2*n);

assert(iter.hasNext(),false);

try {
 console.log( iter.next());
} catch (e) {
  assert(true, true);
}
