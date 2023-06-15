async function fetchFile(filePath) {
  const res = await fetch(filePath);
  const data = await res.json();

  return data;
};

const data = fetchFile("users.json");
console.log(data);
