const express = require("express");
const app = express();

app.set('views', './views')
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res
    .status(200)
    .render("index.pug", {title: "Web App deploy", message: "Hello"})
    .send(data);
});

app.listen(3000);
