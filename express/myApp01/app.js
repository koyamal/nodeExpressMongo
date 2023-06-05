const express = require("express");
const fs = require("fs");

const app = express();

// app.get("/", (req, res) => {
//   throw new Error("BROKEN");
// });

// app.get("/", (req, rex, next) => {
//   fs.readFile("/file-does-not-exist", (err, data) => {
//     if(err){
//       next(err);
//     } else {
//       res.send(data);
//     }
//   })
// });

app.get('/', [
  function (req, res, next) {
    fs.writeFile('/inaccessible-path', 'data', next)
  },
  function (req, res) {
    res.send('OK')
  }
]);

app.listen(3000);
