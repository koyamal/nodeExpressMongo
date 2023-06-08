function a(name) {
  console.log('hello ' + this.name + ", " + name);
}

const tim = {name: "Tim"};

const b = a.bind(tim, "Tommy");

b();

a.apply(tim, ["Tommy"]);

a.call(tim, "Tommy");
