const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.body.frm_chkbx);
  console.log(req.body.frm_text);
  const data = {
    frm_text: req.body.frm_text,
    frm_chkbx: req.body.frm_chkbx || null,
  }
  res.render("showBody.ejs", data);
  // res.send(`text: ${req.body.frm_text} chkbx: ${req.body.frm_chkbx}`);
});

app.listen(3000);
