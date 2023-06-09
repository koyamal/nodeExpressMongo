const s = Symbol("hello");
const s2 = Symbol("hello");

console.log(s);
console.log(s2);
console.log(s === s2);

console.log(typeof s);

const str = new String("Tom");
console.log(str);

String.prototype[s] = function() {
  console.log("Hello s");
}

String.prototype[s2] = function() {
  console.log("Hello s2");
}


str[s2]();
