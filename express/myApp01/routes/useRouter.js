const express = require("express");

const router = express.Router();

router.use("/user/:id", (req, res, next) => {
  next("route");
  // next();
}, (req, res, next) => {
  console.log("next()");
  res.send("hello...");
});

router.get("/user/:id", (req, res, next) => {
  res.send("hello, user!");
});

module.exports = router;
