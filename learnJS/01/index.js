new Promise(function(resolve, reject) {
  console.log("Promise");
  // resolve("hello");
  reject("hello");
}).then(function(data) {
  console.log("then", data);
  return data;
  // throw new Error();
}).then(function(data) {
  console.log("then", data);
  return data;
}).catch(function(data) {
  console.log("catch", data);
}).finally(function(data) {
  console.log("finally", data);
});

console.log("global end");
