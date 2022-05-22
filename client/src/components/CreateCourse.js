import React, { Component } from "react";
import axios from "axios";

export default class CreateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseid: "",
      coursename: "",
      tic: "",
      coursegpa: "",
      courseduration: ""
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      courseid,
      coursename,
      tic,
      coursegpa,
      courseduration,
    } = this.state;

    const data = {
      courseid: courseid,
      coursename: coursename,
      tic: tic,
      coursegpa: coursegpa,
      courseduration: courseduration,
    };
    console.log(data);
    axios.post("http://localhost:8000/course/save", data).then((res) => {
      if (res.data.success) {
        alert("course Added Successfully");
        this.setState({
          courseid: "",
          coursename: "",
          tic: "",
          coursegpa: "",
          courseduration: "",
        });
      }
    });
  };
  render() {
    return (
      <div className="bannerr-image">
        <div className="col-md-8 mt-4 mx-auto">
          <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <div class="card-header py-3">
              <p class="text-primary m-0 font-weight-bold">Add New Course</p>
            </div>
            <h4 className="h3 mb-3 font-weight-normal">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appilcation
              Form-Course
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="row">
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Course ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="courseid"
                    placeholder="Enter courseid"
                    value={this.state.courseid}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>course name</label>
                <input
                  type="text"
                  className="form-control"
                  name="coursename"
                  placeholder="Enter coursename"
                  value={this.state.coursename}
                  onChange={this.handleInputChange}
                  required
                />
              </div>


              
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Teacher In Charge name</label>
                <input
                  type="text"
                  className="form-control"
                  name="tic"
                  placeholder="Enter Teacher Name"
                  value={this.state.tic}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
                

                <div class="col">
                  <label style={{ marginBottom: "5px" }}>GPA</label>
                  <br />
                  <select
                    name="coursegpa"
                    style={{ width: "400px", height: "34px" }}
                    required
                    value={this.state.coursegpa}
                    onChange={this.handleInputChange}
                  >
                    <option>Select GPA</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              

                <div class="col">
                  <label style={{ marginBottom: "5px" }}>course duration</label>
                  <br />
                  <select
                    name="courseduration"
                    style={{ width: "400px", height: "34px" }}
                    required
                    value={this.state.courseduration}
                    onChange={this.handleInputChange}
                  >
                    <option>Select Duration</option>
                    <option>6 months</option>
                    <option>12 months</option>
                  </select>
                </div>

              

              <center>
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ marginTop: "15px", width: "100%" }}
                >
                  Submit
                </button>
              </center>
            </form>
            
          </div>
        </div>
      </div>
    );
  }
}
