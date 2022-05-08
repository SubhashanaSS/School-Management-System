import React, { Component } from "react";
import axios from "axios";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      dob: "",
      gender: "",
      studentid: "",
      grade: "",
      contactno: "",
      stdemail: "",
      gdnname: "",
      gdncontactno: "",
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
      address,
      dob,
      gender,
      studentid,
      grade,
      contactno,
      stdemail,
      gdnname,
      gdncontactno,
    } = this.state;

    const data = {
      name: name,
      address: address,
      dob: dob,
      gender: gender,
      studentid: studentid,
      grade: grade,
      contactno: contactno,
      stdemail: stdemail,
      gdnname: gdnname,
      gdncontactno: gdncontactno,
    };
    console.log(data);
    axios.post("http://localhost:8000/student/save", data).then((res) => {
      if (res.data.success) {
        alert("Student Added Successfully");
        this.setState({
          name: "",
          address: "",
          dob: "",
          gender: "",
          studentid: "",
          grade: "",
          contactno: "",
          stdemail: "",
          gdnname: "",
          gdncontactno: "",
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
              <p class="text-primary m-0 font-weight-bold">Add New Student</p>
            </div>
            <h4 className="h3 mb-3 font-weight-normal">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appilcation
              Form-Student
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
                    <label style={{ marginBottom: "5px" }}>DOB</label>
                    <input
                      type="date"
                      //min="2020-10-05"
                      max="2022-05-08"
                      class="datepicker"
                      data-date-format="mm/dd/yyyy"
                      className="form-control"
                      name="dob"
                      value={this.state.dob}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div class="col">
                  <label style={{ marginBottom: "5px" }}>Gender</label>
                  <br />
                  <select
                    name="gender"
                    style={{ width: "400px", height: "34px" }}
                    required
                    value={this.state.gender}
                    onChange={this.handleInputChange}
                  >
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Student ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="studentid"
                      placeholder="Enter Student ID"
                      value={this.state.studentid}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div class="col">
                  <label style={{ marginBottom: "5px" }}>Grade</label>
                  <br />
                  <select
                    name="grade"
                    style={{ width: "400px", height: "34px" }}
                    required
                    value={this.state.grade}
                    onChange={this.handleInputChange}
                  >
                    <option>Select Grade</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>
                      Student Contact No
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="contactno"
                      placeholder="Enter Student Contact No"
                      pattern="[0-9]{10}"
                      value={this.state.contactno}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div class="col">
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Student Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="stdemail"
                      placeholder="example@email.com"
                      value={this.state.stdemail}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Guardian Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="gdnname"
                    placeholder="Enter Guardian Name"
                    value={this.state.gdnname}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>
                      Guardian Contact No
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="gdncontactno"
                      placeholder="Enter Guardian Contact No"
                      pattern="[0-9]{10}"
                      value={this.state.gdncontactno}
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
