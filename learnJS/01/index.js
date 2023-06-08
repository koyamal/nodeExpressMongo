function a(name) {
  console.log('hello ' + this.name + ", " + name);
}

const tim = {name: "Tim"};

const b = a.bind(tim, "Tommy");

b();

a.apply(tim, ["Tommy"]);

a.call(tim, "Tommy");

const arry= [1, 2, 3, 4, 5];

Math.max(1, 2);
const result = Math.max.apply(null, arry);
console.log(result);

console.log(Math.max(...arry));
console.log(...arry);
