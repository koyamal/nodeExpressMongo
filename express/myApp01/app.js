const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use("/user/:id", (req, res, next) => {
  console.log("Request Type: ", req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World.");
});

app.get("/user/:id", (req, res) => {
  res.send(`This is User's(ID: ${req.params.id}) page`);
});

app.listen(3000);
