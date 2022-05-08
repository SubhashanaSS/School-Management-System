import React, { Component } from "react";
import axios from "axios";

export default class EditTeacher extends Component {
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
    const id = this.props.match.params.id;

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
    axios.put(`http://localhost:8000/teacher/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Teacher's Data Updated Successfully");
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

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/teacher/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          name:res.data.teacher.name,
          address:res.data.teacher.address,
          phonenumber:res.data.teacher.phonenumber,
          teacherid:res.data.teacher.teacherid,
          dob: res.data.teacher.dob,
          highereducation:res.data.teacher.highereducation,
          subject:res.data.teacher.subject,
          yos:res.data.teacher.yos
        });

        console.log(this.state.teacher);
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <div class="shadow-lg p-3 mb-5 bg-white rounded">
          <h4 className="h3 mb-3 font-weight-normal">Teacher Profile</h4>
          <form className="needs-validation" noValidate>
            <div class="card shadow">
              <div class="card-header py-3">
                <p class="text-primary m-0 font-weight-bold">
                  Update Teacher Details
                </p>
              </div>
              <div class="card-body">
                <div class="col">
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      placeholder="Full name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      aria-label="Full name"
                    ></input>
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

                <div class="col">
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Address</label>
                    <input
                      type="text"
                      class="form-control"
                      name="address"
                      placeholder="Address"
                      value={this.state.address}
                      onChange={this.handleInputChange}
                      aria-label="Address"
                    ></input>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>Phone No</label>
                      <input
                        type="text"
                        class="form-control"
                        name="phoneno"
                        placeholder="Phone No"
                        value={this.state.phoneno}
                        onChange={this.handleInputChange}
                        aria-label="Phone No"
                      ></input>
                    </div>
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
                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>Start Date</label>
                      <input
                        type="text"
                        class="form-control"
                        name="startdate"
                        placeholder="Start Date"
                        value={this.state.startdate}
                        onChange={this.handleInputChange}
                        aria-label="Start Date"
                      ></input>
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
             </div>
          </div>
        </div>
    </div>


            &nbsp; &nbsp;
            <button
              className="btn btn-success"
              type="submit"
              style={{ marginTop: "15px" }}
              onClick={this.onSubmit}
            >
              <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}
