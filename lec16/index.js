const util = require("util");

const Animal = function() {

}

Animal.prototype.message = "qwert";

Animal.prototype.say = function () {
  console.log(this.message);
}

const Dog = function() {
  Animal.call(this);
  this.message = "WanWan";
};
util.inherits(Dog, Animal);

const dog = new Dog();
dog.say();
