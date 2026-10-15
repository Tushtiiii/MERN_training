const router = require("express").Router();
const adminRouter = require("../routers/adminRouter");
const recepRouter = require("../routers/recepRouter");
const APIResponse = require("./apiResponse");
const {verifyToken} = require("../config/jswebtoken")


router.use(async(request,response,next)=>{
    const header = request.headers.authorization;
    if(header){
        const token = header.split('')[1];
        if(token)
            await verifyToken(token,(err,data)=>{
                if(err)
                    response.json(new APIResponse(false,"token not found"));
                else
                    request.info=data;
                    next();
            })
        
        else
            response.json(new APIResponse(false,"token not found"));
        response.json(new APIResponse(true,"go ahead"));
        next();
    }else{
        response.json(new APIResponse(true," header missing......"))
    }
}); 

router.use("/admin",adminRouter);
router.use("/recep",recepRouter);

module.exports=router;