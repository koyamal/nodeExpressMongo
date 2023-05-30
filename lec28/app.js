const express = require("express");
const app = express();

app.get("/home/index", (req, res) => {
  res.status(200).send("Hello, Express. /home/index");
});

app.listen(3000);
