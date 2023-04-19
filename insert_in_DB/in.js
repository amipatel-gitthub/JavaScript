
const express = require("express");
const app = express()
const mongodb = require("mongodb");

const module2 = express.Router();


const skill = mongodb.MongoClient;
module2.post("/", (req, res) => {

    const record = {
        "p_name": req.body.p_name,
        "p_price": req.body.p_price
    };
    console.log("heloooo")
    skill.connect(process.env.CONNECTION_URL, (err, connection) => {
        console.log(process.env.CONNECTION_URL)
        if (err) throw err;
        else {
            console.log(req.body)
            const db = connection.db(process.env.DATABASE_NAME);
            // console.log(process.env.DATABASE_NAME)
            db.collection(process.env.COLLECTION_NAME).insertOne(record, (err, result) => {
                if (err) throw err;
                else {
                    res.send("record inserted");
                }
            })
        }
    })

});

module.exports = module2
