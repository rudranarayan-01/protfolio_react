const mongoose = require("mongoose")

const DataSchema = {
    name:String,
    email:String,
    subject:String,
    message:String
}

const data = mongoose.model("Data",DataSchema)

module.exports = data;