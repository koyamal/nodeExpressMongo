new Promise((resolve, reject) => {
  console.log("Hello ");
  resolve();
}).then(() => {
  console.log("World");
}
).catch(() => {
  console.log("dlroW");
});
