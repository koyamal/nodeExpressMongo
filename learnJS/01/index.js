async function useFetch() {
  const response = await fetch("./users.json");
  const users = await response.json();
  users.forEach((user) =>{
    console.log(`I'm ${user.name}, ${user.age} year's old.`);
  });
}

useFetch();
