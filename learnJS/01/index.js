class Person {
  constructor(name, age, countory) {
    this.name = name;
    this.age = age;
    this.countory = countory;
  }

  sayHello() {
    console.log(`I'm ${this.name}, from ${this.countory}. Hello`);
  }

  sayBye() {
    console.log("Bye");
  }
}

class Japanese extends Person {
  constructor(name, age, countory) {
    super(name, age, countory);
  }
  sayBye() {
    console.log("さようなら");
  }
}

const bob = new Person("bob", 43, "USA");
bob.sayHello();
bob.sayBye();

const taro = new Japanese("taro", 12, "Japanese");
taro.sayBye();
