new Promise(function(resolve, reject) {
  console.log("Promise");
  resolve("hello");
  // reject();
}).then(function(data){
  console.log("then 1", data);
  // throw new Error();
  return data;
}).then(function(data){
  console.log("then 2", data);
  return data;
}).catch(function(){
  console.log("catch");
}).finally(function(data){
  console.log("finally", data);
});

console.log("Global end");
