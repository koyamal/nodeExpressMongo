const addNumberFactory = num => value =>  num + value;

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);


const incrementFactory = () => {
  let num = 0;

  const a = () => {
    num = num + 1;
    console.log(num);
  }

  return a;
}

const increment = incrementFactory();

increment();
increment();
