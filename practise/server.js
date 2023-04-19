const express = require("express");
const app = express();

const module1 = require("./module1")
app.use("/module1", module1)

let port = process.env.PORT || 6666
app.listen(port, () => {
    console.log("the port is 6666");
})
