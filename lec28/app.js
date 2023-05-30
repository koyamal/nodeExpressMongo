const express = require("express");
const app = express();

app.get("/home/index", (req, res) => {
  res.status(200).send("Hello, Express. /home/index");
});

app.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200).send(`Hello, Express. /user/${req.params.id}`);
})

app.listen(3000);
