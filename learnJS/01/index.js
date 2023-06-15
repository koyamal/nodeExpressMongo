fetch('users.json').then(function(response) {
  console.log(response);
  return response.json();
}).then(function(json) {
  console.log(json);
  json.forEach(data => {
    console.log(`${data.name}, ${data.age}`);
  });
  console.log();
  return json[0];
}).then(function(json) {
  console.log(json);
});
