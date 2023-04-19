const express = require("express");
var app = express();
var Module2 = express.Router();
Module2.get("/", (req, res) => {
    res.json({ "Msg:": " Module2 is get" });
});
Module2.post("/Module2", (req, res) => {
    res.json({ "Msg:": "Module2 is post profile" });
});
module.exports = Module2;