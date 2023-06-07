function extend<T, U>(first: T, second: U): T & U {
  return { ...first, ...second};
}

const x = extend({ a: "Hello" }, { b: 42 });
console.log(x.a);
console.log(x.b);
