var express = require("express");
var data = require("data");
var app = express();


app.get("/insert", (req, res) => {
    res.sendFile(__dirname + "/form.html")
});




app.listen(8081, () => {
    console.log("server listing port is 8081");
})
