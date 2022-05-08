const express = require('express');
const Teachers = require('../models/teachers');

const router = express.Router();

//add new teacher

router.post('/teacher/save',(req,res)=>{

    let newTeacher = new Teachers(req.body);

    newTeacher.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Teacher added successfully"
        });
    });

});

//get teacher

router.get('/teachers',(req,res) =>{
    Teachers.find().exec((err,teachers) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStaffs:teachers
        });
    });
});

//get specific teacher

router.get("/teacher/:id",(req,res) =>{

    let staffId = req.params.id;

    Teachers.findById(teacherId,(err,teacher) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            teacher
        });
    });

    
});

//update teacher

router.put('/teacher/update/:id',(req,res)=>{
    Teachers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,staff)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//delete teacher

router.delete('/teacher/delete/:id',(req,res) =>{
    Teachers.findByIdAndRemove(req.params.id).exec((err,deletedteacher) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesful",deletedteacher
        });
    });
});

module.exports = router;