const express = require("express");
const app = express();

app.set('views', './views')
// app.set("view engine", "pug");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res
    .status(200)
    .render("index.ejs", {title: "Web App deploy", message: "Hello"})
    .send(data);
});

app.listen(3000);
