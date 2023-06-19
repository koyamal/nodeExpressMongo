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

function Japanese(name, age) {
  Person.call(this, name, age);
  this.lang = "Japanese";
}

Japanese.prototype = Object.create(Person.prototype);

function JapaneseGirl(name, age) {
  Japanese.call(this, name, age);
  this.girl = true;
}

JapaneseGirl.prototype = Object.create(Japanese.prototype);

const bob = new Person("bob", 12);
console.log(bob);

bob.hello();
bob.bye();

const taro = new Japanese("taro", 43);
console.log(taro);
