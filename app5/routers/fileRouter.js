const router = require('express').Router();
const path = require('path');
const{json} = require("stream/consumers");

router.post('/upload', async(req, res) => {
    try{
        const name = req.body.name;
        const file = req.files.fnm;
        console.log("Directory name is", __dirname);
        console.log("file name is", file.name);
        console.log("file size is", file.size);
        console.log("file type is", file.mimetype);
        const filename = Date.now()+path.extname(file.name);
        const filepath = path.join(__dirname, '../uploads', file.name);
        await file.mv(filepath);
        res.json( "file uploaded successfully");
    }catch(err){
        console.log(err);
        res.json("file could not be upload");
    }
})


module.exports = router;