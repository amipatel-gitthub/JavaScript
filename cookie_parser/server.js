const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.get("/setthecookies", (req, res) => {
    res.cookie("sub_one", "react.js");
    res.cookie("sub_two", "Node.js");
    res.cookie("sub_three", "mongodb");
    res.send({ "msg": "cookies are accepted" });
});

app.get("/getthecookies", (req, res) => {
    console.log(req.cookies);
    console.send(req.cookies);
});

app.get("/deletetthecookies", (req, res) => {
    req.clearcookie("sub_one");
    req.send("cookie deleted");
});

app.listen(5050, () => {
    console.log("server listing port is 5050")
});

// *
// **
// ***
// ****
// *****