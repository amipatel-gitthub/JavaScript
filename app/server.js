const express = require("express");
const req = require("express/lib/request");
const app = express();
// const bodyparser = require

// const cors = require("cors");
const mongoose = require("mongoose");
const data = require("./data");
const user = require("./userModule");

app.use(express.json());
// app.use(cors());

// connect to mongodb database
mongoose.connect("mongodb://localhost:27017/skillqode_meet", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// app.get("/insert", (req, res) => {
//     // const result = user.insertMany(data.users);
//     console.log(data.use)
//     res.send(result);
// })
app.get("/users",(req,res)=>{
    // const result =user.insertMany(data.users)
    user.find(req.query).then((data)=>{
        res.json(data);
    });
});

//assign the port number
app.listen(5151, () => {
    console.log(`listing port is ${port}`);
});

