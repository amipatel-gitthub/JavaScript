const express = require("express");
// const res = require("express/lib/response");

const userModule = require("./schema")

exports.insert=(async (req, res) => {
    // console.log("hellos")
    await userModule.create(req.body).then(data => res.send(data))
})


exports.update=(async(req,res)=>{
    await userModule.updateOne({name: req.body.name},{$set:{password:req.body.password}})
})


