const person = {
  name: "Tom",
  hello: function() {
    console.log("I'm " + this.name);
  }
}

person.hello();

const hello = person.hello;

hello();
