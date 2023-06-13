let c = {
  prop: "Hello",
}

let d = c;

console.log(c,d);

d.prop = "bye";

console.log(c,d);
