const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    mobile: {
        type: String,
        required: [true, "Mobile number is required"],
        unique:[true,"mobile no must be unique"]
    },
    email: {
        type: String,
        required: [true, "Mobile no  is required"],
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    password: {
        type: String,
        required: [true, "Password can not be blank"],
        // match: "/^(?=.*[A-Za-z])(?=.*[a-z](?=.*\d).+$/",
    },
    role:{
        type:String,
        required:[true,"role is required"],
        enum:["user","doctor","admin"],
    },
    status:{
        type:String,
        required:[true,"status is required"],
        enum:["active","inactive","blocked"],
        default:"inactive",
    },
},{timestamps:true});

const doctorSchema = new mongoose.Schema({
      name: {
        type: String,
        required: [true, "Name is required"]
    },
    mobile: {
        type: String,
        required: [true, "Mobile number is required"],
        unique:[true,"mobile no must be unique"]
    },
    email: {
        type: String,
        required: [true, "Mobile no  is required"],
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    spealization:{
        type:String,
        required:[true,"spealization is required"],
    },
    timing:{
        type:String,
        required:[true,"timing is required"],
    }
},{timestamps:true});

const bookingSchema = new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"patient is required"],
    },
    date:{
        type:Date,
        required:[true,"boojing date is must......"],
    },
    time:{
        type:String,
        required:[true,"boojing time is must......"],
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:[true,"doctor ref is must......"],
    },
    status:{
        type:String,
        enum:["pending","confirmed","cancelled","visited"],
        default:"pending",
    }
},{timestamps:true});
const visitSchema = new mongoose.Schema({
    name:{
        type:String,
        ref:"User",
        required:[true,"patient name is required"],
    },
    date:{
        type:Date,
        required:[true,"visit date is required"],
    },
    time:{
        type:String,
        required:[true,"visit time is required"],
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:[true,"doctor ref is must......"],
    },
    booking:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking",
        required:[true,"booking ref is must......"],
    },
},{timestamps:true});

const visitDiseaseSchema = new mongoose.Schema({
    visit:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Visit",
        required:[true,"visit's ref is must......"],
    },
    disease:{
        type:String,
        required:[true,"disease description is required"],
    },
    prescription:{
        type:String,
        required:[true,"patient prescription is must......"],
    }    
},{timestamps:true});
const testSchema = new mongoose.Schema({
    visit:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"VisitDisease",
        required:[true,"visit's ref is must......"],
    },
    testname:{
        type:String,
        required:[true,"test name is required"],
    },
    testdate:{
        type:String,
        required:[true,"test date is required"],
    },
    report:{
        type:String,
        required:[true,"test report is required"],
    }
},{timestamps:true});


const User = mongoose.model("User", userSchema);
const Doctor = mongoose.model("Doctor", doctorSchema);
const Booking = mongoose.model("Booking", bookingSchema);
const Visit = mongoose.model("Visit", visitSchema);
const VisitDisease = mongoose.model("VisitDisease", visitDiseaseSchema);
const Test = mongoose.model("Test", testSchema);

module.exports = { User, Doctor, Booking, Visit, VisitDisease, Test };