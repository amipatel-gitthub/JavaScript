const express = require("express");
const ejs = require("ejs");
var app = express();



app.listen(3333)
console.log("servwr listing port is 3333")

app.set('view engine', "ejs")

app.get("/student", (rwq, res) => {
    var model = {
        studentId: "S011", studentname: "Ramesh", studentMarks: "99", subject: [
            { name: "math", marks: "54" },
            { name: "science", marks: "53" },
            { name: "english", marks: "55" }
        ]
    }
    res.render('student', model);
})
