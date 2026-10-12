const router = require('express').Router();
const User = require('../schemas/userSchema');
const Profile = require('../schemas/profileSchema');

router.post("/save",async(req,res) =>{
    try{
    const user = await User.create(req.body);
    res.json("USER CREATED" +user);
    }catch(err){
        console.error(err);
        res.json("error");
    }
})

router.post("/saveProfile",async(req,res) =>{
    try{
        const pro = await Profile.create(req.body);
        res.json("PROFILE CREATED" +pro);
    }catch(err){
        console.error(err);
        res.json("error");
    } 
});

router.get("/profiles/:id",async(req,res) =>{
    try{
        // const data = await profile.find();
        const data = await Profile.find({user:req.params.id}).populate('user');
        if(!data){
            res.json("profile not found");
        }
        res.json(data);
    }
    catch(err){
        console.error(err);
        res.json("error");
    }
});

module.exports = router;