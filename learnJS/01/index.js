class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("Hello " + this.name);
  }
}

const bob = new Person("Bob", 23);

setTimeout(bob.hello.bind(bob), 1000);
setTimeout(() => {bob.hello()}, 1000);
