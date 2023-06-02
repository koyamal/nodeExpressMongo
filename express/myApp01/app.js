const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express: GET");
});

app.post("/", (req, res) => {
  res.send("Hello, Express: POST");
});

app.listen(3000);
