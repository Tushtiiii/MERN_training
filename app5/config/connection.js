const mongoose = require('mongoose');

const getCon=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/mydatabase");
        console.log("Database connected successfully");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = getCon;