const express = require("express");
const mongoose = require("mongoose");

const controller = require("./controller")

const skill = express.Router();


mongoose.connect("mongodb://localhost:27017/skill_nir")

skill.post("/insert", controller.insert)
skill.put("/update", controller.update)



module.exports = skill
