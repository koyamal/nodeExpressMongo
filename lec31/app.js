const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const data = {
    items: [
      {name: "<b>sato</b>"}, {name: "suzuki"}, {name: "takahashi"},
    ],
  };
  res.render("index.ejs", data);
});

app.listen(3000);
