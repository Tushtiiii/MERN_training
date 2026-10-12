const router = require('express').Router();
const Person = require('../Schemas/personSchema');
const path = require('path');

router.post('/uploads', async (req, res) => {
    try{
        const name = req.body.name;
        const mobile = req.body.mobile;
        const file = req.files.fnm;
        const filename = Date.now()+path.extname(file.name);
        const filepath = path.join(__dirname, '../uploads', file.name);
        await file.mv(filepath);
        const data = await Person.create({
            name:name, mobile:mobile, file:filename, filepath:filepath, filetype:file.mimetype
        });
        if(!data)
            return res.json("person could not be upload");
        res.json("person added..........");
    }catch(err){
        console.log(err);
        res.json("person could not be upload");
    }
})

router.get('/show/:id', async(req, res) => {
try{
    const data = await Person.findById(req.params.id);
    if(!data)
        return res.json("person not found");
    res.json({
        name:data.name,
        mobile:data.mobile,
        filename:data.filename,
        filepath:data.filepath,
        filetype:data.filetype,
        image:"http://localhost:8989/"+data.filename
    });
}catch(err){
    console.log(err);
    res.json("person not found");
}
});


module.exports = router;