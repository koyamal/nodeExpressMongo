new Promise(function(resolve, reject) {
  console.log("Promise");
  resolve();
}).then(function(){
  console.log("then");
});

console.log("Global end");
