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

class Japanese extends Person {
  constructor(name, age, id) {
    super(name, age, id);
    this.country = "Japanese";
  }

  hello() {
    console.log(`こんにちは、私は${this.name}です。`);
  }
}

const addNum = numGenerator();

const bob = new Person("bob", 23, addNum());
const tom = new Person("tom", 32, addNum());
const taro = new Japanese("太郎", 43, addNum());
console.log(bob);
console.log(tom);
console.log(taro);
bob.hello();
taro.hello();
