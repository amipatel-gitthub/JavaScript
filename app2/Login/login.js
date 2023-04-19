const express = require("express");
const jwt = require("jwt-simple");
const tokenObj = require("../Token/token");
const LoginModule = express.Router();

LoginModule.post("/", (req, res) => {
    const uname = req.body.uname;
    const upwd = req.body.upwd;
    if (uname === "meet" && upwd === "lathiya") {
        const token = jwt.encode({ "uname": uname, "upwd": upwd }, "skill@123")
        tokenObj.token=token;
        console.log( tokenObj.token);
        res.json({ "msg": "your login successfull....", "token": token });
    }
    else {
        res.json({ "msg": "your login fail...." });
    }
})

module.exports = LoginModule;