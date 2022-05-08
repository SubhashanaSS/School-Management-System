const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    staffid:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    startdate:{
        type:Date,
        required:true
    },
    higherstudies:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
   
});


module.exports = mongoose.model('Staffs',staffSchema);