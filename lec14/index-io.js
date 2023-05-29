const fs = require("fs");
process.chdir(__dirname);

fs.readFile("./samples.json", "utf-8", (error, data) => {
  console.log("Inside readFile");
  if(error){
    console.log(error);
    return;
  }

  setTimeout(() => {
    console.log("setTimeout inside readFile");
  });

  setImmediate(() => {
    console.log("setImmediate inside readFile");
  });

  process.nextTick(() => {
    console.log("process.nextTick inside readFile");
  });
});

setTimeout(() => {
  console.log("setTimeout outside readFile");
});

setImmediate(() => {
  console.log("setImmediate outside readFile");
});

process.nextTick(() => {
  console.log("process.nextTick outside readFile");
});
