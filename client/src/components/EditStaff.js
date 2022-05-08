import React, { Component } from "react";
import axios from "axios";

export default class EditStaff extends Component {
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
    const id = this.props.match.params.id;

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
    axios.put(`http://localhost:8000/staff/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Employee's Data Updated Successfully");
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

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/staff/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          name: res.data.staff.name,
          staffid: res.data.staff.staffid,
          role: res.data.staff.role,
          address: res.data.staff.address,
          email: res.data.staff.email,
          phoneno: res.data.staff.phoneno,
          startdate: res.data.staff.startdate,
          higherstudies: res.data.staff.higherstudies,
          salary: res.data.staff.salary,
        });

        console.log(this.state.staff);
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <div class="shadow-lg p-3 mb-5 bg-white rounded">
          <h4 className="h3 mb-3 font-weight-normal">Staff Profile</h4>
          <form className="needs-validation" noValidate>
            <div class="card shadow">
              <div class="card-header py-3">
                <p class="text-primary m-0 font-weight-bold">
                  Update Staff Details
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

                <div class="row">
                  <div class="col">
                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>Staff ID</label>
                      <input
                        type="text"
                        class="form-control"
                        name="staffid"
                        placeholder="Staff ID"
                        value={this.state.staffid}
                        onChange={this.handleInputChange}
                        aria-label="Staff ID"
                      ></input>
                    </div>
                  </div>

                  <div class="col">
                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>Staff Role</label>
                      <input
                        type="text"
                        class="form-control"
                        name="role"
                        placeholder="Staff Role"
                        value={this.state.role}
                        onChange={this.handleInputChange}
                        aria-label="Staff Role"
                      ></input>
                    </div>
                  </div>
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

                  <div class="col">
                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>Email</label>
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        aria-label="Email"
                      ></input>
                    </div>
                  </div>
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
                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>
                        Higher Studies
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="higherstudies"
                        placeholder="Higher Studies"
                        value={this.state.higherstudies}
                        onChange={this.handleInputChange}
                        aria-label="Higher Studies"
                      ></input>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>
                      Current Salary
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="salary"
                      placeholder="Current Salary"
                      value={this.state.salary}
                      onChange={this.handleInputChange}
                      aria-label="Guardian Contact No"
                    ></input>
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
