const mongoose=require("mongoose");

const myuserSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    role:{type:String,required:true}
});

const MyUser=mongoose.model("MyUser",myuserSchema);

module.exports=MyUser;