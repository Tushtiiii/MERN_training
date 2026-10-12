const router=require("express").Router();
const adminRouter=require("./adminRouter");
const hrRouter=require("./hrRouter");
const {verifyToken}=require("../utils/jwtoken")

// create a middleware to check the token
router.use((request,response,next)=>{
    const header=request.headers.authorization;
    if(header){
        const token=header.split(' ')[1];
        verifyToken(token,(err,data)=>{
            if(err)
                response.json({msg:"Token is invalid or expired....."});        
            else{
                request.info=data;
                next();
            }
        })
    
    }
    else
        response.json({msg:"Token is missing...."});
});



router.use("/admin",adminRouter);
router.use("/hr",hrRouter);

module.exports=router;
