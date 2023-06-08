function a() {
  console.log("Hello");
}

a.prop = 0;
a.method = function() {
  console.log("method");
}

a.method.prop = 100;

a();
a.method();
console.log(a.prop);
console.log(a.method.prop);
