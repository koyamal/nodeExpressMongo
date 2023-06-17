class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log(`Hello. I'm ${this.name}`);
  }
}

const bob = new Person("bob", 23);
bob.hello();
