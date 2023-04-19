const express = require("express");
const { default: mongoose } = require("mongoose");

const skill = express.Router();

const controller = require("./controller")

mongoose.connect("mongodb://localhost:27017/skillqode")


skill.post("/insert",controller.insert)
skill.put("/update",controller.update)

module.exports=skill