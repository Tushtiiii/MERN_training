const router=require("express").Router();


// create a middleware to check the authorization(role)
router.use((request,response,next)=>{
    const role=request.info.role;
    if(role=='admin')
        next();
    else
        response.json({msg:"Unauthorized user....."})    
});


router.get("/home",async(req,res)=>{
    res.json({msg:"Welcome to Admin Home..."})
})


module.exports=router;