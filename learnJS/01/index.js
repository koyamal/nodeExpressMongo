async function myFetch(fileName) {
	const response = await fetch(`./json/${fileName}`);
	const json = await response.json();
  console.log(json);
	return json;
}

myFetch("user1.json");
