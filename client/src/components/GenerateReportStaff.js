import React from "react";
import ReactToPrint from "react-to-print";

import axios from 'axios';

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

class GenerateReportStaff extends React.Component {

  constructor(props){
    super(props);

    this.state={
      staffs:[]
    };

  }
  componentDidMount(){
    this.retrieveStaffs();
  }

  retrieveStaffs(){
    axios.get("http://localhost:8000/staffs").then(res =>{
      if(res.data.success){
        this.setState({
          staffs:res.data.existingStaffs
        });
      
        console.log(this.state.staffs)
      }
  
      
    });
  }

  
  filterData(staffs,searchKey){
    const result = staffs.filter((staffs) =>
    staffs.name.toLowerCase().includes(searchKey)
    )
    this.setState({staffs:result})
  }

  handleSearchArea = (e) =>{
    const searchKey=e.currentTarget.value;

    axios.get("http://localhost:8000/staffs").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingStaffs, searchKey)
  
      }
    })
  }
  
  render() {
    return (
      <div className="container">
          <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <br></br><br></br>
            <h4>All Staff Report</h4>
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
              <th scope="col">Staff ID</th>
              <th scope="col">Staff Role</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Staff Date</th>
              <th scope="col">Higher Studies</th>
              <th scope="col">Current Salary</th>
            </tr>
          </thead>

          <tbody>
            {this.state.staffs.map((staffs,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{staffs.name}</td>
                <td>{staffs.staffid}</td>
                <td>{staffs.role}</td>
                <td>{staffs.address}</td>
                <td>{staffs.email}</td>
                <td>{staffs.phoneno}</td>
                <td>{staffs.startdate}</td>
                <td>{staffs.higherstudies}</td>
                <td>{staffs.salary}</td>
                
              </tr>
            ))}
          </tbody>
        </table>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h5 style={{color:"red"}}>Total Number of Employees : {this.state.staffs.length}</h5>
        
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
        <GenerateReportStaff ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}


export default Example;
