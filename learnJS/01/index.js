new Promise(function(resolve, reject) {
  console.log("Promise");
  // resolve("hello");
  reject("bye");
}).then(function(data){
  console.log("then 1", data);
  // throw new Error(data);
  return data;
}).then(function(data){
  console.log("then 2", data);
  return data;
}).catch(function(data){
  console.log("catch", data);
}).finally(function(data){
  console.log("finally", data);
});

console.log("Global end");
