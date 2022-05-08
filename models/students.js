const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    studentid:{
        type:String,
        required:true
    },
    grade:{
        type:Number,
        required:true
    },
    contactno:{
        type:Number,
        required:true
    },
    stdemail:{
        type:String,
        required:true
    },
    gdnname:{
        type:String,
        required:true
    },
    gdncontactno:{
        type:String,
        required:true
    },
    
});


module.exports = mongoose.model('Students',studentSchema);