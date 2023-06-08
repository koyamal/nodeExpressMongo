function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function() {
    console.log("Hello " + this.name);
  }
}

Person.prototype.hello = function() {
  console.log("Hello " + this.name);
}

const bob = new Person("Bob", 18);
const tom = new Person("Tom", 23);
const sun = new Person("Sun", 16);

bob.hello();
tom.hello();

console.log(Person.prototype === bob.__proto__);
