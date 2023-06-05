const express = require("express");

const sampleRouter = require("./routes/sample");

const app = express();

app.get("/", (req, res) => { res.send("Hello, World"); })

app.use("/sample", sampleRouter);

app.listen(3000);
