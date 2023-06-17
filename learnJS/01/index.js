function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function() {
    console.log("hello " + this.name);
  }
}

Person.prototype.hello = function() {
  console.log("Hello " + this.name);
}

const bob = new Person("bob", 23);
const tom = new Person("tom", 24);
const sun = new Person("sun", 25);

console.log(bob);
bob.hello();


console.log(Person.prototype.hello === bob.hello);
console.log(Person.prototype === bob.__proto__);
