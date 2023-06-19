function Person (name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log("Hello, I'm", this.name);
}

const bob = new Person("bob", 12);
console.log(bob);

bob.hello();
