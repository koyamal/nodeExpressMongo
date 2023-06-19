function Person (name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log("Hello, I'm", this.name);
}

Person.prototype.bye = function() {
  console.log("bye");
}

const bob = new Person("bob", 12);
console.log(bob);

bob.hello();
