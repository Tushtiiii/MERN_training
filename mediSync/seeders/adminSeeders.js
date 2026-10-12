const {User} = require('../models/dbmodels');

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
        mobile:"9826026390", 
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