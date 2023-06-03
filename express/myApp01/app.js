const express = require("express");

const app = express();

app.use('/static', express.static('public'));
app.use(express.static('pictures'));

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

app.get('/ab+cd', (req, res) => {
  res.send('/ab+cd');
});

app.listen(3000);
