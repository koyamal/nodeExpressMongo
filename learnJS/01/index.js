class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("Person: Hello " + this.name);
  }
}

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log("Person: Hello " + this.name);
// }

const bob = new Person("Bob", 32);
console.log(bob);
bob.hello();
