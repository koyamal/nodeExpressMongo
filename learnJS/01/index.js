function sleep(cb, val) {
  setTimeout(function() {
    console.log(val++);
    cb(val);
  }, 1000);
}

sleep(function(val) {
  sleep(function(val) {
    sleep(function(val) {
    }, val);
  }, val);
}, 0);
