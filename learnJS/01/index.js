function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log("Person: Hello " + this.name);
}

Person.prototype.bye = function() {
  console.log("Person: Bye " + this.name);
}

function Japanese(name, age) {
  Person.call(this, name, age);
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.bye = function() {
  console.log("Japanese: Sauyonara " + this.name);
}

Japanese.prototype.seeyou = function() {
  console.log("Japanese: SeeYou " + this.name);
}

const taro = new Japanese("taro", 23);

console.log(taro);

taro.hello();
taro.bye();
taro.seeyou();
