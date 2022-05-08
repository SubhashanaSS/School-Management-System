import React, { Component } from "react";
import axios from "axios";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      staffid: "",
      role: "",
      address: "",
      email: "",
      phoneno: "",
      startdate: "",
      higherstudies: "",
      salary: "",
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
      name,
      staffid,
      role,
      address,
      email,
      phoneno,
      startdate,
      higherstudies,
      salary,
      
    } = this.state;

    const data = {
      name: name,
      staffid: staffid,
      role: role,
      address: address,
      email: email,
      phoneno: phoneno,
      startdate: startdate,
      higherstudies: higherstudies,
      salary: salary,
      
    };
    console.log(data);
    axios.post("http://localhost:8000/staff/save", data).then((res) => {
      if (res.data.success) {
        alert("Staff Added Successfully");
        this.setState({
          name: "",
          staffid: "",
          role: "",
          address: "",
          email: "",
          phoneno: "",
          startdate: "",
          higherstudies: "",
          salary: "",
          
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
              <p class="text-primary m-0 font-weight-bold">Add New Employee</p>
            </div>
            <h4 className="h3 mb-3 font-weight-normal">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appilcation
              Form-Staff
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="row">
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Full Name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>

                <div className="row">
                <div class="col">
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Staff ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="staffid"
                      placeholder="Enter Staff ID"
                      value={this.state.staffid}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div class="col">
                  <label style={{ marginBottom: "5px" }}>Staff Role</label>
                  <br />
                  <select
                    name="role"
                    style={{ width: "400px", height: "34px" }}
                    required
                    value={this.state.role}
                    onChange={this.handleInputChange}
                  >
                    <option>Select Role</option>
                    <option>Principle</option>
                    <option>Deputy Principle</option>
                    <option>Senior Teacher</option>
                    <option>Teacher</option>
                    <option>Non-Academic</option>
                  </select>
                </div>
                </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Enter Address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div class="row">
                <div class="col">
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>
                    Phone No
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneno"
                      placeholder="Enter Staff Phone No"
                      pattern="[0-9]{10}"
                      value={this.state.phoneno}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div class="col">
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="example@email.com"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Start Date</label>
                    <input
                      type="date"
                      //min="2020-10-05"
                      max="2022-05-08"
                      class="datepicker"
                      data-date-format="mm/dd/yyyy"
                      className="form-control"
                      name="startdate"
                      value={this.state.startdate}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div class="col">
                  <label style={{ marginBottom: "5px" }}>higher Studies</label>
                  <br />
                  <select
                    name="higherstudies"
                    style={{ width: "400px", height: "34px" }}
                    required
                    value={this.state.higherstudies}
                    onChange={this.handleInputChange}
                  >
                    <option>Select Higher Studies</option>
                    <option>PhD</option>
                    <option>MSc</option>
                    <option>BSc</option>
                    <option>Diploma</option>
                    <option>NVQ</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Current salary</label>
                  <input
                    type="text"
                    className="form-control"
                    name="salary"
                    placeholder="Enter Current Salary"
                    value={this.state.salary}
                    onChange={this.handleInputChange}
                    required
                  />
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
