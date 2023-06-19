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

function JapaneseBoy(name, age) {
  Japanese.call(this, name, age);
  this.boy = true;
}

JapaneseBoy.prototype = Object.create(Japanese.prototype);

const bob = new Person("bob", 12);
console.log(bob);

bob.hello();
bob.bye();

const taro = new Japanese("taro", 43);
console.log(taro);

const hanako = new JapaneseGirl("hanako", 12);
console.log(hanako);

if(hanako.girl) {
  console.log(`${hanako.name} is girl`);
} else {
  console.log(`${hanako.name} is not girl`);
}

const sabu = new JapaneseBoy("saburo", 23);
console.log(sabu);

if(sabu instanceof JapaneseBoy) {
  console.log(`${sabu.name} is Japanese boy`);
}
