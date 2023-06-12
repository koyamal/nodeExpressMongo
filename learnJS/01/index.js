async function useFetch() {
  const response = await fetch("./users.json");
  if(response.ok) {
    const users = await response.json();
    if(!users.length) {
      throw new Error("no data found");
    }
    return users;
  }
}

async function init() {
  try {
    const users = await useFetch();
    users.forEach((user) => {
      console.log(`I'm ${user.name}, ${user.age} year's old.`);
    });
  } catch(e) {
    console.error(e);
  }
}

init();
