const express = require("express")
const app = express()


const dotenv = require("dotenv")
dotenv.config();

const cors = require("cors")
app.use(cors());

const module2 = require("./in")
app.use("/insert", module2)

let port = process.env.PORT || 1234
app.listen(port, () => {
    console.log(`port is ${port}`)
})


