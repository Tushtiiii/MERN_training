const router= require("express").Router();
const APIResponse = require("./apiResponse");

router.use((req,res,next)=>{
    const role= req.authInfo.role;
    if(role == "")
        next();
    else
        response.json(new APIResponse(false,"unauthorized user" ));
})


router.get("/home",(req,res)=>{
    res.json(new APIResponse(true,"welcome to recep home page"));
});

router.post("/addDoctor",async(req,res)=>{
    
})

module.exports=router; 