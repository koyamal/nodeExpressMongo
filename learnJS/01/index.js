function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log("Hello " + this.name);
}

const bob = new Person("bob", 23);
const tom = new Person("tom", 24);
const sun = new Person("sun", 25);

console.log(bob);
bob.hello();
