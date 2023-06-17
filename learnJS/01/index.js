function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log("Hello " + this.name);
}

function Japanese(name, age) {
  Person.call(this, name, age);
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function() {
  console.log("こんにちは " + this.name);
}

const taro = new Japanese("taro", 32);

console.log(taro);
taro.hello();
