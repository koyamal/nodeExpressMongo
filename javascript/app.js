const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Hello");
  res.send("Hello, world...");
});
console.log("Hello, World");
app.listen(3000);
