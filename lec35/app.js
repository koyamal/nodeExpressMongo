const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs");
});

app.post("/", (req, res) => {
  res.send("OK!!");
});

app.listen(3000);
