const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let data = "<!DOCTYPE html>\r\n";
  data += "<html>\r\n";
  data += "  <head>\r\n";
  data += "    <meta charset='UTF-8'>\r\n";
  data += "    <title>startup</title>\r\n";
  data += "  </head>\r\n";
  data += "  <body>\r\n";
  data += "    <h1>Hello World</h1>\r\n";
  data += "    <p>Hello World</p>\r\n";
  data += "  </body>\r\n";
  data += "</html>";
  res.status(200).send(data);
});

app.listen(3000);
