import React, { Component } from "react";
import axios from "axios";

export default class CreateTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phonenumber: "",
      teacherid: "",
      dob: "",
      highereducation: "",
      subject: "",
      yos: "",
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
        phonenumber,
        teacherid,
        dob,
        highereducation,
        subject,
        yos,

    } = this.state;

    const data = {
        name:name,
        address:address,
        phonenumber:phonenumber,
        teacherid:teacherid,
        dob:dob,
        highereducation:highereducation,
        subject:subject,
        yos:yos,
        
    };
    console.log(data);
    axios.post("http://localhost:8000/teacher/save", data).then((res) => {
      if (res.data.success) {
        alert("Teacher Added Successfully");
        this.setState({
            name: "",
            address: "",
            phonenumber: "",
            teacherid: "",
            dob: "",
            highereducation: "",
            subject: "",
            yos: "",
          
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
              <p class="text-primary m-0 font-weight-bold">Add New Teacher</p>
            </div>
            <h4 className="h3 mb-3 font-weight-normal">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appilcation
              Form-Teacher
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
                    <label style={{ marginBottom: "5px" }}>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Enter address"
                      value={this.state.address}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div class="col">
                  <label style={{ marginBottom: "5px" }}>phonenumber</label>
                  <br />
                  <select
                    name="phonenumber"
                    style={{ width: "400px", height: "34px" }}
                    required
                    value={this.state.phonenumber}
                    onChange={this.handleInputChange}
                   ></select>
                </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>teacherid</label>
                <input
                  type="text"
                  className="form-control"
                  name="teacherid"
                  placeholder="Enter Teacherid"
                  value={this.state.teacherid}
                  onChange={this.handleInputChange}
                  required
                />
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


              
                </div>

                <div class="col">
                  <label style={{ marginBottom: "5px" }}>higher Education</label>
                  <br />
                  <select
                    name="highereducation"
                    style={{ width: "400px", height: "34px" }}
                    required
                    value={this.state.highereducation}
                    onChange={this.handleInputChange}
                  >
                    <option>Select Higher Educations</option>
                    <option>PhD</option>
                    <option>MSc</option>
                    <option>BSc</option>
                    <option>Diploma</option>
                    <option>NVQ</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Enter Subject"
                    value={this.state.subject}
                    onChange={this.handleInputChange}
                  ></input>
                   <option selected>Choose...</option>
                    <option>Maths</option>
                    <option>It</option>
                    <option>Sinhala</option>
                    <option>Science</option>
                    <option>History</option>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>yos</label>
                  <input
                    type="text"
                    className="form-control"
                    name="yos"
                    placeholder="Enter yos"
                    value={this.state.yos}
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
