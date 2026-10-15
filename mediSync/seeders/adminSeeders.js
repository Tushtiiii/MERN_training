const {User} = require('../models/dbmodels');
const bcrypt = require("bcrypt")
const seeder= async()=>{
    try{
        const email = "admin@example.com";
        const adminObj = await User.findOne({role:"admin"});
        if(adminObj){
            console.log("admin already exists");
            return;
        }
    await User.create({
        name:"admin",
        mobile:"7974165722", 
        email,
        password:await bcrypt.hash("admin123",10),
        role:"admin",
        status:"active"
    })
    console.log("admin created successfully");
    }catch(err){
        console.log("admin creation failed",err);
    }
}

module.exports = seeder