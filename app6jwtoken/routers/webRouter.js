const router=require("express").Router();
const MyUser=require("../schemas/myuserSchema");
const {generateToken}=require("../utils/jwtoken")

router.post("/regist",async(req,res)=>{
    try{
    const username=req.body.username;
    const password=req.body.password;
    const role=req.body.role;
    await MyUser.create({username,password,role});
    res.json({msg:"User registered Successfully...."});
    }catch(err){
        console.log(err);
        res.json({msg:"User could not be register...."});
    }
})

router.post("/login",async(req,res)=>{
    try{
    const username=req.body.username;
    const password=req.body.password;
    const user=await MyUser.findOne({username,password});
    if(user){
        const token=generateToken(user.username,user.role);
        res.json({msg:"User logined successfully....",token})
    }
    else
            res.json({msg:"Invalid credentials,,,...."});
    }catch(err){
        console.log(err);
        res.json("Something is wrong....");
    }
})


module.exports=router;