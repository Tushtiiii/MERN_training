const jwt = require("jsonwebtoken");
const APIresponse = require("../routers/apiResponse");


const secret = " fvngoriith#v2-3448u6";
const exptm="10m";

function generatetoken(mobile,role){
    const token = jwt.sign({mobile,role},secret,{expiresIn:exptm});
    return token;
}

function verifyToken(token,callback){
    jwt,verify(token,secret,(err,data)=>{
        if(err)
            return callback(err,null);
        else
            return callback(null,data);
    })
}

module.exports = generatetoken ;