class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("Person: Hello " + this.name);
  }

  bye() {
    console.log("Person: Bye " + this.name);
  }
}

class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.genderb= gender;
  }

  bye() {
    console.log("Japanese: Sauyonara " + this.name);
  }

}

const taro = new Japanese("taro", 23, "Male");

console.log(taro);

taro.hello();
taro.bye();
