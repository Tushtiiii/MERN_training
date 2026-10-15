const router= require("express").Router();
const APIResponse = require("./apiResponse");

router.use((req,res,next)=>{
    const role= req.authInfo.role;
    if(role == "Receptionist")
        next();
    else
        response.json(new APIResponse(false,"unauthorized user" ));
})

router.get("/home",async(req,res)=>{
    res.json(new APIResponse(true,"welcome to recep home page"));
});

module.exports=router;