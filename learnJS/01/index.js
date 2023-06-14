function sleep(val) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init() {
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  // console.log(val);
  // throw new Error("New Error");
  return val;
}

// init().then(function(val) {
//   console.log("hello", val);
// }).catch(function(e) {
//   console.log(e);
// });

async function init2() {
  const val = await init();
  console.log("init2: ", val);
}

init2();

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   sleep(val);
//   return val;
// }).then(function(val) {
//   sleep(val);
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// });
