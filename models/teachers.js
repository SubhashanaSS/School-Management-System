const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
  },
      address:{
          type:String,
          required:true
  },
      phonenumber:{
          type:Number,required:true
  },
      teacherid:{
          type:String,required:true
  },
      dob:{
          type:Date,required:true
  },
      highereducation:{
          type:String,required:true
  },
      subject:{
          type:String,required:true
  },
      yos:{
          type:Number,required:true
  }


});

module.exports = mongoose.model('Teachers',teacherSchema);