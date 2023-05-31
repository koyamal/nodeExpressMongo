const express = require("express");
const app = express();

app.set('views', './views')
// app.set("view engine", "pug");
// app.set("view engine", "ejs");
// app.set("view engine", "hjs");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res
    .status(200)
    .render("index.hbs", {title: "Web App deploy", message: "Hello"});
});

app.listen(3000);
