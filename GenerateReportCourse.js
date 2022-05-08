import React from "react";
import ReactToPrint from "react-to-print";

import axios from 'axios';

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

class GenerateReportCourse extends React.Component {

  constructor(props){
    super(props);

    this.state={
      courses:[]
    };

  }
  componentDidMount(){
    this.retrieveCourses();
  }

  retrieveCourses(){
    axios.get("http://localhost:8000/courses").then(res =>{
      if(res.data.success){
        this.setState({
          courses:res.data.existingCourses
        });
      
        console.log(this.state.courses)
      }
  
      
    });
  }

  
  filterData(courses,searchKey){
    const result = students.filter((course) =>
    course.name.toLowerCase().includes(searchKey)
    )
    this.setState({courses:result})
  }

  handleSearchArea = (e) =>{
    const searchKey=e.currentTarget.value;

    axios.get("http://localhost:8000/courses").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingCourses, searchKey)
  
      }
    })
  }
  
  render() {
    return (
      <div className="container">
          <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <br></br><br></br>
            <h4>All courses Report</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            style={{background:'#e5e6dc'}}
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}></input>
          </div>
        </div>
        
        <table className="table table-hover" style={{marginTop:'40px',background:'LightGray'}}>
          <thead>
          <tr>
              <th scope="col">#</th>
              <th scope="col">courseid</th>
              <th scope="col">coursename</th>
              <th scope="col">tic</th>
              <th scope="col">coursegpa</th>
              <th scope="col">course Duration</th>
            </tr>
          </thead>

          <tbody>
            {this.state.students.map((students,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{courses.courseid}</td>
                <td>{courses.coursename}</td>
                <td>{courses.tic}</td>
                <td>{courses.coursegpa}</td>
                <td>{courses.courseduration}</td>
                
              </tr>
            ))}
          </tbody>
        </table>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h5 style={{color:"red"}}>Total Number of courses : {this.state.courses.length}</h5>
        
    </div>
    );
  }
}



class Example extends React.Component {
  render() {
    return (
      <div style={{marginTop:'50px', marginLeft:'40px'}}>
        <ReactToPrint
          trigger={() => <button style={{background:'#d0d1a3'}}>Print Report</button>}
          content={() => this.componentRef}
        />
        <GenerateReportCourse ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}


export default Example;
