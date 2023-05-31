const express = require("express");
const app = express();

app.set('views', './views')
// app.set("view engine", "pug");
// app.set("view engine", "ejs");
app.set("view engine", "hjs");

app.get("/", (req, res) => {
  res
    .status(200)
    .render("index.hjs", {title: "Web App deploy", message: "Hello"});
});

app.listen(3000);
