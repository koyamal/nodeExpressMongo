const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.use('/user/:id', (req, res, next) => {
  console.log(`Request URL: ${req.originalUrl}`);
  next();
}, (req, res, next) => {
  console.log("Request Type: ", req.method);
  next();
});

router.get('/user/:id', (req, res, next) => {
  res.send("User page");
});

module.exports = router;
