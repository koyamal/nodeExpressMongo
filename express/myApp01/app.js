const express = require("express");

const app = express();

app.use('/static', express.static('public'));
app.use(express.static('pictures'));

app.get("/", (req, res) => {
  res.send("Hello, Express: GET");
});

app.post("/", (req, res) => {
  res.send("Hello, Express: POST");
});

app.put("/", (req, res) => {
  res.send("Hello, Express: PUT");
});

app.delete("/", (req, res) => {
  res.send("Hello, Express: GELETE");
});

// app.get('/ab+cd', (req, res) => {
//   res.send('/ab+cd');
// });

// app.get('/ab*cd', (req, res) => {
//   res.send('/ab*cd');
// });

// app.get(/a/, (req, res) => {
//   res.send('/a/');
// });

// app.get('/users/:userId/books/:bookId', (req, res) => {
//   res.send(req.params);
//   // res.send(req.params.userId);
//   // res.send(req.params.bookId);
// });

// app.get("/flights/:from-:to", (req, res) => {
//   res.send(req.params);
// });

// app.get("/name/:first.:last", (req, res) => {
//   res.send(req.params);
// });

// app.get("/example/a", (req, res) => {
//   res.send("This is A");
// });

// app.get("/example/b", (req, res, next) => {
//   console.log("B is called..");
//   next();
// }, (req, res) => {
//   res.send("This is B");
// });

// const fn0 = function(req, res, next) {
//   console.log("fn0 is called..");
//   next();
// };

// const fn1 = function(req, res, next) {
//   console.log("fn1 is called..");
//   next();
// };

// const fn2 = function(req, res) {
//   res.send("This is C");
// };

// app.get("/example/c", [fn0, fn1, fn2]);

app.route("/book")
  .get((req, res) => { res.send("GET"); })
  .post((req, res) => { res.send("POST"); })
  .put((req, res) => { res.send("PUT"); });
app.listen(3000);
