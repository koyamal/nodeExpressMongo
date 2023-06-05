const express = require("express");

const sampleRouter = require("./routes/sample");
const routerRouter = require("./routes/useRouter");

const app = express();

app.get("/", (req, res) => { res.send("Hello, World"); })

app.use("/sample", sampleRouter);

app.use("/admin", routerRouter, (req, res) => {
  res.send("next('router')");
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000);
