const router = require('express').Router();
const Employee = require('../schemas/empSchema');
const Dept = require('../schemas/deptSchema');

router.post("/saveDept",async(req,res) =>{
    try{
    const user = await Dept.create(req.body);
    res.json(" dept added.......");
    }catch(err){
        console.error(err);
        res.json("error could not add dept");
    }
})

router.post("/saveEmp",async(req,res) =>{
    try{
        const emp = await Employee.create(req.body);
        res.json("Employee added.......");
    }catch(err){
        console.error(err);
        res.json("error could not add employee");
    }
});

router.get("/listEmp/:id",async(req,res) =>{
    try{
        const data = await Employee.find({dept:req.params.id}).populate('dept');
        if(!data){
            res.json("employee not found");
        }
        res.json(data);
    }
    catch(err){
        console.error(err);
        res.json("error");
    }
});

module.exports = router;