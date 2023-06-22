const express = require("express");
const mongoose = require("mongoose");
const app = express();

const mongo_uri = "mongodb+srv://shekharmaharaj2905:Paradise1@paradisebeach.textclv.mongodb.net/?retryWrites=true&w=majority";

async function connectDB(){
    try{
        await mongoose.connect(mongo_uri);
        console.log("Connected to mongo");
    }catch(error){
        console.log(error);
    }
}

connectDB();

app.listen(
    8000,
    ()=>{
        console.log("PORT IS ACTIVE ON 8000");
    }
);