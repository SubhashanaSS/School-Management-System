import React, { Component } from 'react';
import axios from 'axios';

export default class StaffDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            staff:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/staff/${id}`).then((res) =>{
            if(res.data.success) {
                this.setState({
                    staff:res.data.staff
                });

                console.log(this.state.staff);
            }
        });
    }
    render() {

        const {name,staffid,role,address,email,phoneno,startdate,higherstudies,salary} = this.state.staff;
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
                <dt className="col-sm-3">Staff ID</dt>
                <dd className="col-sm-9">{staffid}</dd>
                <dt className="col-sm-3">Staff Role</dt>
                <dd className="col-sm-9">{role}</dd>
                <dt className="col-sm-3">Address</dt>
                <dd className="col-sm-9">{address}</dd>
                <dt className="col-sm-3">Email</dt>
                <dd className="col-sm-9">{email}</dd>
                <dt className="col-sm-3">Phone Number</dt>
                <dd className="col-sm-9">{phoneno}</dd>
                <dt className="col-sm-3">Start Date</dt>
                <dd className="col-sm-9">{startdate}</dd>
                <dt className="col-sm-3">higher Studies</dt>
                <dd className="col-sm-9">{higherstudies}</dd>
                <dt className="col-sm-3">Current Salary</dt>
                <dd className="col-sm-9">{salary}</dd> 
            </d1>
            </div>
            </div>
            </div>
            </div>
            </div>
            
        )
    }
}