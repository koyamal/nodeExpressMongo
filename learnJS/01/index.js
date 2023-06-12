// console.log(window.fetch("./users.json"));

// fetch("./users.json").then(function(response) {
//   console.log(response);
//   return response.json();
// }).then(function(json){
//   console.log(json);
//   json.forEach(data => {
//     console.log(`I'm ${data.name}, ${data.age} year's old.`);
//   });
// });


async function useFetch() {
  const response = await fetch("./users.json");
  const users = await response.json();
  users.forEach((user) =>{
    console.log(`I'm ${user.name}, ${user.age} year's old.`);
  });
}

useFetch();
