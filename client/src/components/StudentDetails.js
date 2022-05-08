import React, { Component } from 'react';
import axios from 'axios';

export default class StudentDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            student:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/student/${id}`).then((res) =>{
            if(res.data.success) {
                this.setState({
                    student:res.data.student
                });

                console.log(this.state.student);
            }
        });
    }
    render() {

        const {name,address,dob,gender,studentid,grade,contactno,stdemail,gdnname,gdncontactno} = this.state.student;
        return (    
            <div className="container">
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
        

        <div class="shadow-lg p-3 mb-5 bg-white rounded" style={{width:'800px', marginLeft: '200px', marginTop: '100px'}}>
        <div class="col">
            <div class="card shadow">
                <div class="card-header py-3">
                    <p class="text-primary m-0 font-weight-bold"><div style={{marginTop:'20px'}}><h4>{name}</h4></div>
                    </p>
                <hr/>

            <d1 className="row">
                <dt className="col-sm-3">Full Name</dt>
                <dd className="col-sm-9">{name}</dd>
                <dt className="col-sm-3">Address</dt>
                <dd className="col-sm-9">{address}</dd>
                <dt className="col-sm-3">DOB</dt>
                <dd className="col-sm-9">{dob}</dd>
                <dt className="col-sm-3">Gender</dt>
                <dd className="col-sm-9">{gender}</dd>
                <dt className="col-sm-3">Student ID</dt>
                <dd className="col-sm-9">{studentid}</dd>
                <dt className="col-sm-3">Grade</dt>
                <dd className="col-sm-9">{grade}</dd>
                <dt className="col-sm-3">Student Contact No</dt>
                <dd className="col-sm-9">{contactno}</dd>
                <dt className="col-sm-3">Student Email Address</dt>
                <dd className="col-sm-9">{stdemail}</dd>
                <dt className="col-sm-3">Guardian Name</dt>
                <dd className="col-sm-9">{gdnname}</dd>
                <dt className="col-sm-3">Guardian Contact No</dt>
                <dd className="col-sm-9">{gdncontactno}</dd> 
            </d1>
            </div>
            </div>
            </div>
            </div>
            </div>
            
        )
    }
}