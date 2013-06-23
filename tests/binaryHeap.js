
var BinaryHeap = require('../src/BinaryHeap.js');
var lib = require('./lib.js');
var assert = lib.assert;

var b = new BinaryHeap();

var size = 1000;
var a = lib.generateRandomNumbers(size);

assert(b.size(), 0);

a.forEach(function (e) {
  b.add(e);
});

assert(b.size(),size);

var min = Math.min.apply(null, a);
assert(b.remove(), min);


assert(b.size(), --size);

// Remove min elem from unsorted array
var minIndex = a.indexOf(min);
a.splice(minIndex, 1);

//If this is a real heap, all it's elems should be sorted when removed
var shouldBeSorted = [];
while ( !b.isEmpty() ) {
  shouldBeSorted.push(b.remove());
}

assert(shouldBeSorted, a.sort(function(a,b) { return a - b; }));

assert(b.size(), 0);
