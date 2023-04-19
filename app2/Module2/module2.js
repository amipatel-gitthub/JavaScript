const express = require("express");
const tokenObj = require("../Token/token");

const module2 = express.Router();

module2.get("/", (req, res) => {
    const reqHeaders = req.headers;
    // console.log("Module1 : ", tokenObj.token);
    if(reqHeaders.token==tokenObj.token)
    {
        res.json({"msg":"this is module-2"})
    }
    else
    {
        res.json({"msg":"you are unothorized person"})
    }
});


module.exports = module2

