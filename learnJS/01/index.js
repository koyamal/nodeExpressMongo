const a = {
  prop: 0
}

let { prop } = a;

console.log(a.prop, prop);

prop = 1;

console.log(a.prop, prop);
