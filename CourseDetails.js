import React, { Component } from 'react';
import axios from 'axios';

export default class CourseDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            course:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/course/${id}`).then((res) =>{
            if(res.data.success) {
                this.setState({
                    course:res.data.course
                });

                console.log(this.state.course);
            }
        });
    }
    render() {

        const {
            courseid,
            coursename,
            tic,
            coursegpa,
            courseduration,
          } = this.state;

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
                <dt className="col-sm-3">courseid</dt>
                <dd className="col-sm-9">{courseid}</dd>
                <dt className="col-sm-3">coursename</dt>
                <dd className="col-sm-9">{coursename}</dd>
                <dt className="col-sm-3">tic</dt>
                <dd className="col-sm-9">{tic}</dd>
                <dt className="col-sm-3">coursegpa</dt>
                <dd className="col-sm-9">{coursegpa}</dd>
                <dt className="col-sm-3">courseduration</dt>
                <dd className="col-sm-9">{courseduration}</dd>
                
            </d1>
            </div>
            </div>
            </div>
            </div>
            </div>
            
        )
    }
}