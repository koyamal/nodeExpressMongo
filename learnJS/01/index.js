const a = new Promise(function(resolve, reject){
  console.log("Hello");
  // resolve();
  reject("e");
}).catch(e => {console.log("bye")});

a.then(() => { console.log("Then")});
// a.catch((e) => { console.log("Catch", e)});
// console.log(a);
