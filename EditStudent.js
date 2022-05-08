import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {

    constructor(props){
        super(props);
        this.state={
            courseid: "",
      coursename: "",
      tic: "",
      coursegpa: "",
      courseduration: ""
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

        const {
            courseid,
            coursename,
            tic,
            coursegpa,
            courseduration,
          } = this.state;

        const data ={
            courseid: courseid,
            coursename: coursename,
            tic: tic,
            coursegpa: coursegpa,
            courseduration: courseduration,
        }
        console.log(data)
        axios.put(`http://localhost:8000/course/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("courses's Data Updated Successfully")
                this.setState(
                    {
                        courseid: "",
                        coursename: "",
                        tic: "",
                        coursegpa: "",
                        courseduration: "",
                    }
                )
            }
        })       
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/course/${id}`).then((res) =>{
            if(res.data.success) {
                this.setState({
                    courseid:res.data.course.courseid,
                    coursename:res.data.course.coursename,
                    tic:res.data.student. tic,
                    coursegpa:res.data.student.coursegpa,
                    courseduration:res.data.student.courseduration,
                    
                });

                console.log(this.state.student);
            }
        });
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <h4 className="h3 mb-3 font-weight-normal">course Profile</h4>
                <form className="needs-validation" noValidate>
                <div class="card shadow">
                <div class="card-header py-3">
                    <p class="text-primary m-0 font-weight-bold">Update course Details</p>
                </div>
                <div class="card-body">
                
                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >course id</label>
                                <input type="text" class="form-control" name="courseid" placeholder="Full name" value={this.state.courseid} onChange={this.handleInputChange} aria-label="courseid"></input>
                        </div>
                    </div>

                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >coursename</label>
                                <input type="text" class="form-control" name="coursename" placeholder="coursename" value={this.state.coursename} onChange={this.handleInputChange} aria-label="coursename"></input>
                    </div>
                    </div>
                   

                <div class="row">
                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >tic</label>
                                <input type="text" class="form-control" name="tic" placeholder="tic" value={this.state.tic} onChange={this.handleInputChange} aria-label="tic"></input>
                        </div>
                    </div>

                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >coursegpa</label>
                                <input type="text" class="form-control" name="coursegpa" placeholder="coursegpa" value={this.state.coursegpa} onChange={this.handleInputChange} aria-label="coursegpa"></input>
                        </div>
                    </div>
                </div>           

                <div class="row">
                    <div class="col">
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} >courseduration</label>
                                <input type="text" class="form-control" name="courseduration" placeholder="courseduration" value={this.state.courseduration} onChange={this.handleInputChange} aria-label="courseduration"></input>
                        </div>
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