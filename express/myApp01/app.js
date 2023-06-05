const express = require("express");

const app = express();

app.response.sendStatus = function (statusCode, type, message) {
  return this.contentType(type)
    .status(statusCode)
    .send(message);
}

app.get("/", (req, res) => {
  res.sendStatus(404, 'application/json', '{"error": "resource not found"}');
});

app.listen(3000);
