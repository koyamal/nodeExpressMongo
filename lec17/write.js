const fs = require("fs");

const data = "Hello! Node.js!";
fs.writeFile("./data/hello.txt", data, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Done.");
});
