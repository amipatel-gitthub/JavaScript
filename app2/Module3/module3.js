const express = require("express");
const tokenObj = require("../Token/token");

const module3 = express.Router();

module3.get("/", (req, res) => {
    const reqHeaders = req.headers;
    // console.log("Module1 : ", tokenObj.token);
    if(reqHeaders.token==tokenObj.token)
    {
        res.json({"msg":"this is module-3"})
    }
    else
    {
        res.json({"msg":"you are unothorized person"})
    }
});


module.exports = module3