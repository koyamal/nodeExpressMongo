new Promise(function(resolve, reject) {
  console.log("Promise");
  resolve();
  // reject();
}).then(function() {
  console.log("then");
  throw new Error();
}).then(function() {
  console.log("then");
}).catch(function() {
  console.log("catch");
}).finally(function() {
  console.log("finally");
});

console.log("global end");
