const fs = require("fs");

fs.readFile("./data/sample.json", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("data: ", data);
});
