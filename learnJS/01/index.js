const btn = document.querySelector("button");
btn.addEventListener("click", function task2() {
  console.log("task2 done");
  setTimeout(() => {
    console.log("Inside task2 done");
  }, 1000);
});

function a() {
  setTimeout(function task1(){
    console.log("task1 done");
  }, 6000);

  const startTime = new Date();
  while(new Date() - startTime < 2000);

  console.log("fn a done");
}

a();
