function hello(name) {
  return function() {
    console.log("Hello " + name);
  }
}

setTimeout(hello("Tom"), 1000);
