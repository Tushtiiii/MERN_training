const router = require('express').Router();

let data = [
    {empno:1,ename:"John",desg:"progm" ,sale:20000},
    {empno:2,ename:"Smith",desg:"manager" ,sale:30000},
    {empno:3,ename:"Peter",desg:"analyst" ,sale:40000},
    {empno:4,ename:"David",desg:"developer" ,sale:50000},
]

router.get('/',(req,res)=>{
    res.send("<h1 style='color:blue'> Welcome to the server</h1>");
});

router.get('/list',(req,res)=>{
    res.json(data);
});


router.post("/save",(req,res)=>{
    ob=req.query;
    data.push(ob);
    res.json({result:"data saved successfully"});
}) 

router.get("search/:empno",(req,res)=>{
    let empno=req.params.empno;
    let obj = data.find((e)=>e.empno==empno);

    if(obj) { res.json(obj); }
    else{ res.json("data not found"); }
})

router.get("del/:empno",(req,res)=>{
    let empno=req.params.empno;
    let data = data.filter((e)=>e.empno!=empno);
    res.json({result:"data deleted successfully"});
})

router.get("/count",(req,res)=>{
    res.json({result:data.length});
})


module.exports = router;