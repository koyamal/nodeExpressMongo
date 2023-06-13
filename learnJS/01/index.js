function calcFactory(val, callback) {
  return {
    plus: function(target) {
      const newVal = val + target;
      // setTimeout(() => {
      //   callback(`${val} + ${target} = ${newVal}`);
      // }, 1000);
      setTimeout(callback.bind(null, `${val} + ${target} = ${newVal}`), 1000);
      val = newVal;
    },
    minus: function(target) {
      const newVal = val - target;
      callback(`${val} - ${target} = ${newVal}`);
      val = newVal;
    },
  }
}

const calc = calcFactory(10, console.log);
calc.plus(1);
calc.plus(1);
