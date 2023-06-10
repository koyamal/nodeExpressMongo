const map = new Map();

const key1 = {};

map.set(key1, "value1");

console.log(map.get(key1));

const key2 = function() {};
map.set(key2, "value2");

console.log(map.get(key2));

let key3;
map.set(key3 = 0, 'value3');
console.log(map.get(0));

console.log(map);

for(const m of map) {
  console.log(m);
}

for(const [k, v] of map) {
  console.log(k, v);
}

const s = new Set();
s.add(key1);
s.add(key1);

for(let k of s) {
  console.log(k);
}
