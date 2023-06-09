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
