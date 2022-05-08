const express = require('express');
const Staffs = require('../models/staffs');

const router = express.Router();

//add new staff

router.post('/staff/save',(req,res)=>{

    let newStaff = new Staffs(req.body);

    newStaff.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Staff added successfully"
        });
    });

});

//get staff

router.get('/staffs',(req,res) =>{
    Staffs.find().exec((err,staffs) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStaffs:staffs
        });
    });
});

//get specific staff

router.get("/staff/:id",(req,res) =>{

    let staffId = req.params.id;

    Staffs.findById(staffId,(err,staff) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            staff
        });
    });

    
});

//update staff

router.put('/staff/update/:id',(req,res)=>{
    Staffs.findByIdAndUpdate(
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

//delete student

router.delete('/staff/delete/:id',(req,res) =>{
    Staffs.findByIdAndRemove(req.params.id).exec((err,deletedStaff) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesful",deletedStaff
        });
    });
});

module.exports = router;