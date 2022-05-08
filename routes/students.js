const express = require('express');
const Students = require('../models/students');

const router = express.Router();

//add new student

router.post('/student/save',(req,res)=>{

    let newStudent = new Students(req.body);

    newStudent.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Student added successfully"
        });
    });

});

//get students

router.get('/students',(req,res) =>{
    Students.find().exec((err,students) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStudents:students
        });
    });
});

//get specific student

router.get("/student/:id",(req,res) =>{

    let studentId = req.params.id;

    Students.findById(studentId,(err,student) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            student
        });
    });

    
});

//update student

router.put('/student/update/:id',(req,res)=>{
    Students.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,student)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//delete student

router.delete('/student/delete/:id',(req,res) =>{
    Students.findByIdAndRemove(req.params.id).exec((err,deletedStudent) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesful",deletedStudent
        });
    });
});

module.exports = router;