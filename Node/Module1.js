const express = require("express");
var app = express();
var Module1 = express.Router();
Module1.get("/", (req, res) => {
    res.json({ "Msg:": " Module1 is get" });
});
Module1.post("/Module1", (req, res) => {
    res.json({ "Msg:": "Module1 post profile" });
});
module.exports = Module1;