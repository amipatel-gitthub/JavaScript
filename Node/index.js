const express = require("express");
const Module1 = require("./Module1");
const Module2 = require("./Module2");
const app = express();

app.use("/m1", Module1);
app.use("/m2", Module2);

let port = process.env.PORT || 5060
app.listen(port, () => {
    console.log(`the port is ${port}...`);
});



