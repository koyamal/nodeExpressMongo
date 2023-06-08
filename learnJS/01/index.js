window.name = "John";

// const a = () => console.log("Bye " + this.name);

const person = {
  name: "Tom",
  hello: function() {
    console.log("Hello " + this.name);
    const a = () => console.log("Bye " + this.name);
    a();
  },
  hello_() {
    console.log("Hello " + this.name);
  }
}

// person.hello();

function b() {
  const a = () => console.log("Bye " + this.name);
  a();
}

b();
