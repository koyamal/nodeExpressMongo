const express = require("express");

const router = require("./routes/testRouter");
const sampleRouter = require("./routes/sample");
const routerRouter = require("./routes/useRouter");

const app = express();

app.use('/', router)

app.get("/", (req, res) => { res.send("Hello, World"); })

app.use("/sample", sampleRouter);

app.use("/admin", routerRouter, (req, res) => {
  res.sendStatus(401);
});

app.listen(3000);
