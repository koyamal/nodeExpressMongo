async function useFetch() {
  const response = await fetch("./users.json");
  const users = await response.json();

  return users;
}

async function init() {
  const users = await useFetch();
  users.forEach((user) => {
    console.log(`I'm ${user.name}, ${user.age} year's old.`);
  });
}

init();

try {
  console.log("hello");
  throw new Error();
} catch(e) {
  console.error(e);
} finally {
  console.log("bye");
}
