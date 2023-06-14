function sleep(val) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

sleep(0).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  sleep(val);
  return val;
}).then(function(val) {
  sleep(val);
  return sleep(val);
}).then(function(val) {
  return sleep(val);
});
