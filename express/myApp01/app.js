const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello, Express: GET");
});

app.post("/", (req, res) => {
  res.send("Hello, Express: POST");
});

app.put("/", (req, res) => {
  res.send("Hello, Express: PUT");
});

app.delete("/", (req, res) => {
  res.send("Hello, Express: GELETE");
});

app.listen(3000);
