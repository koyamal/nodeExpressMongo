new Promise(function(resolve, reject) {
  console.log("Promise");
  // resolve();
  reject();
}).then(function() {
  console.log("then");
}).then(function() {
  console.log("then");
}).catch(function() {
  console.log("catch");
});

console.log("global end");
