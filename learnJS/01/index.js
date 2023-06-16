class Person {
  constructor(name, age, countory) {
    this.name = name;
    this.age = age;
    this.countory = countory;
  }

  sayHello() {
    console.log(`I'm ${this.name}, from ${this.countory}. Hello`);
  }
}

const bob = new Person("bob", 43, "USA");
bob.sayHello();
