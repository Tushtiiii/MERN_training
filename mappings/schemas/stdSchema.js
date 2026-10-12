const mongoose = require('mongoose');

const stdSchema = new mongoose.Schema({
    sname: {
        type: String,
        required: true,
        unique: true,

    },
    mobile: {
        type: Number,
        required: true,
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const Student = mongoose.model('Student', stdSchema);
module.exports = Student;