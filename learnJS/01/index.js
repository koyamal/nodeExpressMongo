const fn1 = new Function('a', 'b', 'return a + b');

function fn2(a, b) {
  return a + b;
}


const result = fn1(1, 2);
console.log(result);


console.log(fn1 instanceof Function);
console.log(fn2 instanceof Function);

const obj = new function() {
  this.a = 0;
}

console.log(obj);

const fn3 = new Function("this.a = 0;");
console.log(fn3);

const obj3 = new fn3();
console.log(obj3);

console.log( obj3 instanceof fn3);
