// console.log(window.fetch("./users.json"));

fetch("./users.json").then(function(response) {
  console.log(response);
  return response.json();
}).then(function(json){
  console.log(json);
  json.forEach(data => {
    console.log(data);
  });
});
