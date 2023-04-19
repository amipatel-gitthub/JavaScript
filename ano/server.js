const express = require("express")
const app = express();
app.use(express.json());

const skill = require("./rout")
app.use("/enter", skill)



let port = process.env.PORT || 4567
app.listen(port, (req, res) => {
    console.log(`the port is ${port}`)
});