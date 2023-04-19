const mongoose = require("mongoose");

const collection = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
})

const userModule = new mongoose.model("collection", collection)

module.exports = userModule