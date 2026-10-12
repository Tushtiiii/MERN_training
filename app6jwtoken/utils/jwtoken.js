const jwt=require("jsonwebtoken");

const secret="aabbUUddmjf33-fefefjel2";
const exptm="10m";

function generateToken(unm,role){
    const token=jwt.sign({unm,role},secret,{expiresIn:exptm})
    return token;
}

function verifyToken(token,callback){
    jwt.verify(token,secret,(err,data)=>{
        if(err)
            return callback(err,null);
        else
            return callback(null,data);
    });  
}

module.exports={generateToken,verifyToken};