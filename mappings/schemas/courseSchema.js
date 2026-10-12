const mongoose = require('mongoose');

const coursechema = new mongoose.Schema({
    cname: {
        type: String,
        required: true,
        unique: true,
    },
    fees: {
        type: Number,
        required: true,
    }
});

const Course = mongoose.model('Course', coursechema);

module.exports = Course;