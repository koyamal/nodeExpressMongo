function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log("Hello " + this.name);
}

Person.prototype.sayAge = function() {
  console.log(this.age);
}

function Japanese(name, age, gender) {
  Person.call(this, name, age);
  this.gender = gender;
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function() {
  console.log("こんにちは " + this.name);
}

Japanese.prototype.bye = function() {
  console.log("さようなら " + this.name);
}

const taro = new Japanese("taro", 32, "male");

console.log(taro);
taro.hello();
taro.sayAge();
