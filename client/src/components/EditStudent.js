import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            address:"",
            dob:"",
            gender:"",
            studentid:"",
            grade:"",
            contactno:"",
            stdemail:"",
            gdnname:"",
            gdncontactno:""
        }
    }
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        
        e.preventDefault();
        const id = this.props.match.params.id;

        const {name,address,dob,gender,studentid,grade,contactno,stdemail,gdnname,gdncontactno} = this.state;

        const data ={
            name:name,
            address:address,
            dob:dob,
            gender:gender,
            studentid:studentid,
            grade:grade,
            contactno:contactno,
            stdemail:stdemail,
            gdnname:gdnname,
            gdncontactno:gdncontactno
        }
        console.log(data)
        axios.put(`http://localhost:8000/student/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Students's Data Updated Successfully")
                this.setState(
                    {
                        name:"",
                        address:"",
                        dob:"",
                        gender:"",
                        studentid:"",
                        grade:"",
                        contactno:"",
                        stdemail:"",
                        gdnname:"",
                        gdncontactno:""
                    }
                )
            }
        })       
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/student/${id}`).then((res) =>{
            if(res.data.success) {
                this.setState({
                    name:res.data.student.name,
                    address:res.data.student.address,
                    dob:res.data.student. dob,
                    gender:res.data.student.gender,
                    studentid:res.data.student.studentid,
                    grade:res.data.student.grade,
                    contactno:res.data.student.contactno,
                    stdemail:res.data.student.stdemail,
                    gdnname:res.data.student.gdnname,
                    gdncontactno:res.data.student.gdncontactno
                });

                console.log(this.state.student);
            }
        });
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <h4 className="h3 mb-3 font-weight-normal">Student Profile</h4>
                <form className="needs-validation" noValidate>
                <div class="card shadow">
                <div class="card-header py-3">
                    <p class="text-primary m-0 font-weight-bold">Update Student Details</p>
                </div>
                <div class="card-body">
                
                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >Full Name</label>
                                <input type="text" class="form-control" name="name" placeholder="Full name" value={this.state.name} onChange={this.handleInputChange} aria-label="Full name"></input>
                        </div>
                    </div>

                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >Address</label>
                                <input type="text" class="form-control" name="address" placeholder="Address" value={this.state.address} onChange={this.handleInputChange} aria-label="Address"></input>
                    </div>
                    </div>
                   

                <div class="row">
                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >DOB</label>
                                <input type="text" class="form-control" name="dob" placeholder="DOB" value={this.state.dob} onChange={this.handleInputChange} aria-label="DOB"></input>
                        </div>
                    </div>

                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >Gender</label>
                                <input type="text" class="form-control" name="gender" placeholder="Gender" value={this.state.gender} onChange={this.handleInputChange} aria-label="Gender"></input>
                        </div>
                    </div>
                </div>           

                <div class="row">
                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >Student ID</label>
                                <input type="text" class="form-control" name="studentid" placeholder="Student ID" value={this.state.studentid} onChange={this.handleInputChange} aria-label="Student ID"></input>
                        </div>
                    </div>

                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Grade</label>
                                <input type="text" class="form-control" name="grade" placeholder="Grade" value={this.state.grade} onChange={this.handleInputChange} aria-label="Grade"></input>
                        </div>
                    </div>
                </div>   

                <div class="row">
                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >Student Contact No</label>
                                <input type="text" class="form-control" name="contactno" placeholder="Student Contact No" value={this.state.contactno} onChange={this.handleInputChange} aria-label="Student Contact No"></input>
                        </div>
                    </div>

                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >Student Email</label>
                                <input type="text" class="form-control" name="stdemail" placeholder="Email" value={this.state.stdemail} onChange={this.handleInputChange} aria-label="Student Email"></input>
                        </div>
                    </div>
                </div>
                
                
                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >Guardian Name</label>
                                <input type="text" class="form-control" name="gdnname" placeholder="Guardian Name" value={this.state.gdnname} onChange={this.handleInputChange} aria-label="Guardian Name"></input>
                        </div>
                    </div>

                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Guardian Contact No</label>
                                <input type="text" class="form-control" name="gdncontactno" placeholder="Guardian Contact No" value={this.state.gdncontactno} onChange={this.handleInputChange} aria-label="Guardian Contact No"></input>
                        </div>
                    </div>
                 
                </div>
                </div>

                &nbsp;
                &nbsp;
                
                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Update
                </button>
            </form> 
        </div>
        </div>
        );
        }
}