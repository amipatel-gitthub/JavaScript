const express = require("express");
const multer = require("multer");

const app = express();

var fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './meet')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname);
    }
})

var upload = multer({ storage: fileStorage });

app.post("/hello", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.json("file was uploaded");
});

app.listen(3232)
console.log("app listing port is 3232");


// var express = require("express")
// const app = express()
// var multer = require("multer")

// var fileStorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './upload')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })

// var upload = multer({ storage: fileStorage })
// app.post("/profile", upload.single("image"), (req, res) => {
//     console.log(req.file)
//     res.json({ "msg": "file uploaded" })
// });

// app.listen(3232)
// console.log("server listing 3232");
