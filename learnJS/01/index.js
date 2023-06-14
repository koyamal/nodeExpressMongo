console.log(fetch("users.json"));

const a = fetch("users.json").then((data) => {
  console.log(data);
});

console.log(a);
