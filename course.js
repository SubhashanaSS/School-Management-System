const express = require('express');
const Students = require('../models/course');

const router = express.Router();

//save course


router.post('/add' , (req,res)=>{
    let newCourse = new Course(req.body);

    newCourse.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Course save Successfully"
        })
    })
})

//get course
router.get('/all',(req,res) =>{
    Course.find().exec((err,course) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCourse:course
        });
    });
})

//get a specific course deatails
router.get('/:id', (req,res) =>{
    let courseid = req.params.id;

    Course.findById(courseid,(err,course)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            course
        });
    });
});

//#GoHomeGota2022 #වදනොදීපලකොනන්දෙ

//delete part

router.route('/id').delete((req,res) =>{
    Course.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Course detail Deleted!!!'))
    .catch(err => res.status(400).json('Error: '+err));
});

//update part
router.route('/update/:id').post((req,res)=> {
    Course.findById(req.params.id)
    .then(course =>{
        course.courseid = req.body.courseid;
        course.coursename = req.body.coursename;
        course.tic = req.body.tic;
        course.coursegpa = req.body.coursegpa;
        course.courseduration = req.body.courseduration;

        course.save()
        .then(() => res.json('Course Deatail Updated !'))
        .catch(err => res.status(400).json('Error: ' +err));
    })
    .catch(err => res.status(400).json('Error ' + err));
});


module.exports =router;