function hello(name) {
  console.log("hello", name);
}

function bye() {
  console.log("bye");
}

function fn(cb) {
  cb("Tom");
}

fn(hello);
fn(bye);

fn(function(name) {
  console.log("Goobye", name);
})

setTimeout(() => {hello("Tom")}, 1000);
