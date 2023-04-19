const mongoose = require("mongoose")

let collect = new mongoose.Schema({
    name:{type:String},
    password:{type:String}
})

const userModule = new mongoose.model("nirbhudas",collect)

module.exports=userModule;