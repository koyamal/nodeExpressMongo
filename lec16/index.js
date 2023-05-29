const EventEmitter = require("events").EventEmitter;
const util = require("util");

const Animal = function() {

}
util.inherits(Animal, EventEmitter);
Animal.prototype.message = "qwert";

Animal.prototype.say = function () {
  console.log(this.message);
  this.emit("say", this.message);
}

const Dog = function() {
  Animal.call(this);
  this.message = "WanWan";
};
util.inherits(Dog, Animal);

const dog = new Dog();
dog.on("say", function (message) {
  console.log(`[${message}]!!!!`);
});
dog.say();
