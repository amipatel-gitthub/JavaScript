const express = require("express");
const mustacheexpress = require("mustache-express");
var app = express();



app.listen(3333)
console.log("server listing port is 3333")

app.engine("mustache",mustacheexpress());
app.set('view engine', "mustache")

app.get("/student", (rwq, res) => {
    var model = {
        studentId: "S011", studentname: "Ramesh", studentMarks: "99", subject: [
            { name: "math", marks: "54" },
            { name: "scince", marks: "53" },
            { name: "english", marks: "55" }
        ]
    }
    res.render('student', model);
})