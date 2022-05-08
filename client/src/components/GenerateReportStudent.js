import React from "react";
import ReactToPrint from "react-to-print";

import axios from 'axios';

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

class GenerateReportStudent extends React.Component {

  constructor(props){
    super(props);

    this.state={
      students:[]
    };

  }
  componentDidMount(){
    this.retrieveStudents();
  }

  retrieveStudents(){
    axios.get("http://localhost:8000/students").then(res =>{
      if(res.data.success){
        this.setState({
          students:res.data.existingStudents
        });
      
        console.log(this.state.students)
      }
  
      
    });
  }

  
  filterData(students,searchKey){
    const result = students.filter((student) =>
    student.name.toLowerCase().includes(searchKey)
    )
    this.setState({students:result})
  }

  handleSearchArea = (e) =>{
    const searchKey=e.currentTarget.value;

    axios.get("http://localhost:8000/students").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingStudents, searchKey)
  
      }
    })
  }
  
  render() {
    return (
      <div className="container">
          <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <br></br><br></br>
            <h4>All Students Report</h4>
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
              <th scope="col">Full Name</th>
              <th scope="col">Address</th>
              <th scope="col">DOB</th>
              <th scope="col">Gender</th>
              <th scope="col">StudentID</th>
              <th scope="col">Grade</th>
              <th scope="col">Contact No</th>
              <th scope="col">Student Email</th>
              <th scope="col">Guardian Name</th>
              <th scope="col">Guardian ContactNo</th>
            </tr>
          </thead>

          <tbody>
            {this.state.students.map((students,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{students.name}</td>
                <td>{students.address}</td>
                <td>{students.dob}</td>
                <td>{students.gender}</td>
                <td>{students.studentid}</td>
                <td>{students.grade}</td>
                <td>{students.contactno}</td>
                <td>{students.stdemail}</td>
                <td>{students.gdnname}</td>
                <td>{students.gdncontactno}</td>
                
              </tr>
            ))}
          </tbody>
        </table>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h5 style={{color:"red"}}>Total Number of Students : {this.state.students.length}</h5>
        
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
        <GenerateReportStudent ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}


export default Example;
