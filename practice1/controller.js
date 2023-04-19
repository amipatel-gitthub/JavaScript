const express = require("express");


const userModule = require("./schema")


exports.insert = (async (req, res) => {
    await userModule.insertMany(req.body).then(data => res.send(data))
})

exports.update = (async (req, res) => {
    console.log(req.body)
    await userModule.updateMany({ email: req.body.email }, { $set: { password: req.body.password, name: req.body.name } })
})