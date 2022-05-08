import React from "react";
import ReactToPrint from "react-to-print";

import axios from 'axios';

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

class GenerateReportTeacher extends React.Component {

  constructor(props){
    super(props);

    this.state={
      teachers:[]
    };

  }
  componentDidMount(){
    this.retrieveTeachers();
  }

  retrieveTeachers(){
    axios.get("http://localhost:8000/teachers").then(res =>{
      if(res.data.success){
        this.setState({
          teachers:res.data.existingTeachers
        });
      
        console.log(this.state.teachers)
      }
  
      
    });
  }

  
  filterData(teachers,searchKey){
    const result = teachers.filter((teachers) =>
    teachers.name.toLowerCase().includes(searchKey)
    )
    this.setState({teachers:result})
  }

  handleSearchArea = (e) =>{
    const searchKey=e.currentTarget.value;

    axios.get("http://localhost:8000/teachers").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingTeachers, searchKey)
  
      }
    })
  }
  
  render() {
    return (
      <div className="container">
          <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <br></br><br></br>
            <h4>All Teacher Report</h4>
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
              <th scope="col">phoneno</th>
              <th scope="col">Teacherid</th>
              <th scope="col">Dob</th>
              <th scope="col">highereducation</th>
              <th scope="col">subject</th>
              <th scope="col">yos</th>
            </tr>
          </thead>

          <tbody>
            {this.state.teachers.map((teachers,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{teachers.name}</td>
                <td>{teachers.address}</td>
                <td>{teachers.phoneno}</td>
                <td>{teachers.teacherid}</td>
                <td>{teachers.dob}</td>
                <td>{teachers.highereducation}</td>
                <td>{teachers.subject}</td>
                <td>{teachers.yos}</td>
                
              </tr>
            ))}
          </tbody>
        </table>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h5 style={{color:"red"}}>Total Number of Teachers : {this.state.teachers.length}</h5>
        
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
        <GenerateReportTeacher ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}


export default Example;
