const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    ename: {
        type: String,
        required: true,
        unique: true,
    },
    desgn: {
        type: String,
        required: true,
    },
    sal:{
        type: Number,
        min:25000
    },dept:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dept'
    }
});

const Employee = mongoose.model('Employee', empSchema);

module.exports = Employee;