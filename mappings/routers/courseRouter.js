const router = require('express').Router();
const Course = require('../schemas/courseSchema');
const Student = require('../schemas/stdSchema');

router.post("/saveCourse",async(req,res) =>{
    try{
        const course = await Course.create(req.body);
        res.json("Course added.......");
    }catch(err){
        console.error(err);
        res.json("error could not add course");
    }
})

router.post("/saveStd",async(req,res) =>{
    try{
        const student = await Student.create(req.body);
        res.json("Student added.......");
    }catch(err){
        console.error(err);
        res.json("error could not add student");
    }
});

router.get("/listCourse/:id",async(req,res) =>{
    try{
        const data = await Student.findById().populate('courses');
        if(!data){
            res.json("course not found");
        }
        res.json(data);
    }
    catch(err){
        console.error(err);
        res.json("error");
    }
});

module.exports = router;