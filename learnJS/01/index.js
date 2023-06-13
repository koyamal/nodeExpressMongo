const a = {
  prop: 0
}

let { prop } = a;

console.log(a.prop, prop);

prop = 1;

console.log(a.prop, prop);

function fn(obj) {
  let { prop } = obj;
  prop = 1;
  console.log(obj, prop);
}

fn(a);
