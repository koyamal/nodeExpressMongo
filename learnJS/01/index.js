function genIncrement(val) {
  return function() {
    console.log(++val);
  }
}

const increment = genIncrement(10);
increment();
increment();
increment();
increment();
increment();
increment();
