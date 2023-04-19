const express = require('express');
const pug = require('pug');
var app = express();

app.listen(5151, () => {
    console.log("listening on port 5151");
});

app.set("view engine", "pug");

app.get("/student", (req, res) => {
    var model = {
        studentid: "s011", studentname: "meet", studentmarks: "55", subjects: [
            { name: "meet", marks: "60" },
            { name: "english", marks: "70" },
            { name: "science", marks: "80" },

            
        ],
        studentid1: "s012", studentname1: "jenil", studentmarks1: "33", subject: [
            { name: "dfjklbndfjvb", marks: "50" },
            { name: "english", marks: "60" },
            { name: "science", marks: "70" }
        ]
    }

    res.render("student", model)
})




