const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get("/", (req, res) => {
  console.log("This is /birds");
  res.send("This is /birds");
});

router.get("/about", (req, res) => {
  console.log("This is /birds/about");
  res.send("This is /birds/about");

});

module.exports = router;
