const fs = require("fs");

const data = "Hello! Node.js!";
fs.writeFile("./data/hellooo.txt", data, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Done.");
});
