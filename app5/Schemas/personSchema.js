const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{ type:String,required:true},
    mobile:{ type:String,required:true},
    filename:{ type:String},
    filepath:{ type:String},
    filetype:{ type:String},
    filesize:{ type:Number}
})
    
module.exports = mongoose.model('Person', personSchema);