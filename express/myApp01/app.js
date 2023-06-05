const express = require("express");

const sampleRouter = require("./routes/sample");
const routerRouter = require("./routes/useRouter");

const app = express();

app.get("/", (req, res) => { res.send("Hello, World"); })

app.use("/sample", sampleRouter);

app.use("/admin", routerRouter, (req, res) => {
  res.send("next('router')");
});

app.listen(3000);
