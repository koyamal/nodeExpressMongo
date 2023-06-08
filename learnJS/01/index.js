// console.log("Hello.");

// function fn(a, b) {
//   console.log(a, b);
// }

// fn(1);

const fn2 = function(a, b = 1) {
  console.log(a, b);
}

fn2(1, null);
fn2(1);
fn2(1, undefined);
