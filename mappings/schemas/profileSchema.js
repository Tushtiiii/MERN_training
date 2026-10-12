const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    address:{
        type:String
    },
    mobile:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        unique:true,
    }
});

const profile = mongoose.model('profile',profileSchema);
module.exports = profile;