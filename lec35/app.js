const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('views', './views');
console.log(__dirname);
console.log(process.cwd());
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", (req, res) => {
  res.send("OK!!");
});

app.listen(3000);
