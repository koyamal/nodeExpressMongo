const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use("/user/:id", (req, res, next) => {
  console.log("Request Type: ", req.method);
  next();
}, (req, res, next) => {
  console.log("Request URL: ", req.originalUrl);
  res.send("User Info.");
});

app.get("/", (req, res) => {
  res.send("Hello, World.");
});

app.get("/user/:id", (req, res) => {
  res.send(`This is User's(ID: ${req.params.id}) page`);
});

app.get("/home/:id", (req, res, next) => {
  req.params.id === '0'? next('route'): next();
}, (req, res, next) => {
  console.log("hello");
  next();
},(req, res, next) => {
  res.send('not 0');
});

app.get("/home/:id", (req, res) => {
  res.send("0");
});

app.listen(3000);
