const mongoose=require('mongoose');

const getCon=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/mediSync");
        console.log("Database connected successfully");
    }catch(err){
        console.log("Database connection failed", err);
    }
}

module.exports=getCon;