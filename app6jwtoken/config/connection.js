const mongoose=require("mongoose")

const getCon=async()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/acro");
        console.log("DB Connected....");
    }catch(err){
        console.log("Not connected...",err);
        process.exit(1);
    }
}

module.exports=getCon;