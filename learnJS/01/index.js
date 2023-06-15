async function fetchFile(filePath) {
  const res = await fetch(filePath);
  const data = await res.json();

  return data;
};

async function execute(filePath) {
  const data = await fetchFile(filePath);
  console.log(data);
  console.log("Hello");
};

const a = execute("users.json");

a.then((data) => {
  console.log("World", data);
})
console.log(a);

