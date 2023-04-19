const express = require("express");
const app = express();

const module1 = express.Router()

module1.get("/", () => {
    res.json({ "msg": "this is module1" })
})

module.exports = module1