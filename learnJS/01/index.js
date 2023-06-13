const person = {
  hello: function() {
    return "hello tom";
  }
}

setTimeout(() => {
  console.log(person.hello());
}, 1000);

// setTimeout(() => {
//   alert(person.hello());
// }, 1000);

const obj = {

}
obj.greeting = function() {
  console.log("hello");
}

function after1s(callback) {
  setTimeout(callback, 1000);
}

after1s(obj.greeting);

obj.greeting = function() {
  console.log("hey");
}

function calcFactory(val, cb) {
  return {
    plus: function(target) {
      const newVal = val + target;
      cb(`${val} + ${target} = ${newVal}`);
      val = newVal;
    },
    minus: function(target) {
      const newVal = val - target;
      cb(`${val} - ${target} = ${newVal}`);
      val = newVal;
    }
  }
}

const calc = calcFactory(10, console.log);
calc.plus(5);
calc.minus(2);
console.log(calc);
