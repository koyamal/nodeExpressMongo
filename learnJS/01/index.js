new Promise(function(resolve, reject) {
  console.log("Promise");
  resolve("hello");
  // reject();
}).then(function(data) {
  console.log("then", data);
  return data;
  // throw new Error();
}).then(function(data) {
  console.log("then", data);
  return data;
}).catch(function(data) {
  console.log("catch");
}).finally(function(data) {
  console.log("finally", data);
});

console.log("global end");
