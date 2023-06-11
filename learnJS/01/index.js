function sleep(ms) {
  const startTime = new Date();
  while(new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('button clicked');
})


// sleep(3000);

setTimeout(function() {
  console.log("no1");
  setTimeout(function() {
    console.log("no3");
    sleep(4000);
    console.log("no4");
  }, 4000);
  sleep(3000);
  console.log("no2");
}, 2000);
