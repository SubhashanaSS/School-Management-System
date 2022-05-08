import React, { Component } from 'react';
import axios from 'axios';

export default class TeacherDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            teacher:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/teacher/${id}`).then((res) =>{
            if(res.data.success) {
                this.setState({
                    teacher:res.data.staff
                });

                console.log(this.state.teacher);
            }
        });
    }
    render() {

        const {name,address,phoneno,teacherid,dob,highereducation,subject,yos} = this.state.teacher;
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
                <dt className="col-sm-3">Phonenumber</dt>
                <dd className="col-sm-9">{phonenumber}</dd>
                <dt className="col-sm-3">Teacher ID</dt>
                <dd className="col-sm-9">{teacherid}</dd>
                <dt className="col-sm-3">Dob</dt>
                <dd className="col-sm-9">{dob}</dd>
                <dt className="col-sm-3">higher Education</dt>
                <dd className="col-sm-9">{highereducation}</dd>
                <dt className="col-sm-3">Subject</dt>
                <dd className="col-sm-9">{subject}</dd>
                <dt className="col-sm-3">Yos</dt>
                <dd className="col-sm-9">{yos}</dd>
            </d1>
            </div>
            </div>
            </div>
            </div>
            </div>
            
        )
    }
}