function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function() {
    console.log("OwnProperty: Hello " + this.name);
  }
}

Person.prototype.hello = function() {
  console.log("Person: Hello " + this.name);
}

Object.prototype.hello = function() {
  console.log("Object: Hello " + this.name);
}

const bob = new Person("Bob", 19);
bob.hello();

const result = bob.hasOwnProperty("age");
console.log(result);

console.log("name" in bob);
console.log("hello" in bob);
console.log("bye" in bob);
console.log("hasOwnProperty" in bob);
