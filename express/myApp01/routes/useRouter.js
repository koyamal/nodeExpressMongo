const express = require("express");

const router = express.Router();

router.get("/user/:id", (req, res, next) => {
  if (req.params.id === '0') {
    console.log("next('route(r)'");
    next("route");
    // next("router");
  }
  else next()
}, (req, res, next) => {
  console.log("next()");
  res.send("hello...");
});

router.get("/user/:id", (req, res, next) => {
  res.send("hello, user!");
});

module.exports = router;
