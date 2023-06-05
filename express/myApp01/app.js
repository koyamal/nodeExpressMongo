const express = require("express");

const app = express();

app.get("/", (req, res) => {
  throw new Error("BROKEN");
});

// app.get("/", (req, rex, next) => {

// });

app.listen(3000);
