const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.writeHead(200);
  res.write("Hello, Express");
  res.end();
});

app.listen(3000);
