const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors) ;

app.use(express.json());

mongoose.connect("mongodb+srv://Rudra:Rudra@cluster0.w0qxodk.mongodb.net/Contact")

app.use("/",require("./Routes"))

app.listen(3000,function(){
    console.log("Server is running in 3000");
})