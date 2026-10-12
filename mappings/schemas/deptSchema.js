const mongoose = require('mongoose');

const deptSchema = new mongoose.Schema({
    dname: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    }
});

const Dept = mongoose.model('dept', deptSchema);

module.exports = Dept;