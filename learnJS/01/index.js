async function fetchFile(filePath) {
  const res = await fetch(filePath);
  const data = await res.json();

  return data;
};

async function execute(filePath) {
  const data = await fetchFile(filePath);
  console.log(data);
  console.log("Hello");

  return data;
};

const a = execute("users.json");

a.then((data) => {
  console.log("World", data);
})
console.log(a);

execute("./json/friendsOf1.json").then(data => {
  data.friendIds.forEach(id => {
    console.log(id);
  })
  // data.forEach(dat => {
  //   console.log(dat);
  // });
  console.log(data);
});
