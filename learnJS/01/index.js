function a(name) {
  return "Hello " + name;
}

const b = function(name) {
  return "Hello " + name;
}

const bb = name => "Hello " + name;

console.log(bb("Tom"));


const bbb = (name1, name2) => "Hello " + name1 + " " + name2;

console.log(bbb("Bob", "Tommy"));

const bbbb = (name1, name2) => {
  return "Hello " + name1 + " " + name2;
}

console.log(bbbb("Bob", "Tommy"));
