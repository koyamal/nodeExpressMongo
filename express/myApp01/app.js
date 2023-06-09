const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", [
  function(req, res, next) {
    fs.readFile("/maybe-valid-file", "utf-8", (err, data) => {
      res.locals.data = data;
      next(err);
    })
  },
  function(req, res) {
    res.locals.data = res.locals.data.split(",")[1];
    res.send(res.locals.data);
  }
])

app.listen(3000);
