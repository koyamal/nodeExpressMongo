async function fetchFile(filePath) {
  const res = await fetch(filePath);
  const data = await res.json();

  return data;
};

async function execute() {
  const data = await fetchFile("users.json");
  console.log(data);
  console.log("Hello");
};

const a = execute();

a.then((data) => {
  console.log("World", data);
})
console.log(a);
