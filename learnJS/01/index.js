function numGenerator() {
  let num = 0;
  function addNum() {
    return num++;
  }
  return addNum;
}

class Person {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  hello() {
    console.log(`Hello. I'm ${this.name}`);
  }
}

const addNum = numGenerator();

const bob = new Person("bob", 23, addNum());
const tom = new Person("tom", 32, addNum());
console.log(bob);
console.log(tom);
bob.hello();
