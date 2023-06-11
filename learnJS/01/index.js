new Promise(function(resolve, reject) {
  console.log("Promise");
  resolve();
  // reject();
}).then(function(){
  console.log("then 1");
  throw new Error();
}).then(function(){
  console.log("then 2");
}).catch(function(){
  console.log("catch");
}).finally(function(){
  console.log("finally");
});

console.log("Global end");
