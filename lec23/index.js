(function() {
  const module1 = require("./module-1");
  module1();
})();

(function() {
  const module2 = require("./module-2");
  console.log(module2);
})();

(function() {
  const module3 = require("./module-3");
  console.log(module3.square());
})();

(function() {
  const module4 = require("./module-4");
  const obj = new module4();
  console.log(obj.area());
})();

(function() {
  const { Square, Triangle } = require("./module-5");
  const squ = new Square();
  const tri = new Triangle();
  console.log(squ.area());
  console.log(tri.area());
})();
