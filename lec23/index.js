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
