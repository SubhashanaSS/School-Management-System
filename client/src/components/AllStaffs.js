import React, { Component } from "react";
import axios from "axios";

import backgroundimg from './images/background.jpg';

export default class AllStaffs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: [],
    };
  }
  componentDidMount() {
    this.retrieveStaffs();
  }

  //get all staff
  retrieveStaffs() {
    axios.get("http://localhost:8000/staffs").then((res) => {
      if (res.data.success) {
        this.setState({
            staffs: res.data.existingStaffs,
        });

        console.log(this.state.staffs);
      }
    });
  }

  //staff delete
  onDelete = (id) => {
    axios.delete(`http://localhost:8000/staff/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveStaffs();
    });
  };

  //staff search
  filterData(staffs, searchKey) {
    const result = staffs.filter((staff) =>
    staff.name.toLowerCase().includes(searchKey)
    );
    this.setState({ staffs: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/staffs").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingStaffs, searchKey);
      }
    });
  };

  render() {
    return (
        <div  styles={{ backgroundImage:`url(${backgroundimg})` }}> 
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Staff</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              style={{ background: "#e5e6dc" }}
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>
        &nbsp; &nbsp;
        <div className="card-header py-3" style={{ background: "LightGray" }}>
          <p
            className="text-primary m-0 font-weight-bold"
            style={{ background: "LightGray" }}
          >
            Staff info
          </p>
        </div>
        <table
          className="table table-hover"
          style={{ marginTop: "40px", background: "LightGray" }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">StaffID</th>
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
            {this.state.staffs.map((staffs, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/staff/${staffs._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {staffs.name}
                  </a>
                </td>
                <td>{staffs.staffid}</td>
                <td>{staffs.role}</td>
                <td>{staffs.address}</td>
                <td>{staffs.email}</td>
                <td>{staffs.phoneno}</td>
                <td>{staffs.startdate}</td>
                <td>{staffs.higherstudies}</td>
                <td>{staffs.salary}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${staffs._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(staffs._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">
          <a
            href="/staff/save"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Employee
          </a>
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className="btn btn-success">
          <a
            href="/staffreport"
            style={{ textDecoration: "none", color: "white" }}
          >
            Generate Staff Report
          </a>
        </button>
      </div>
      </div>
    );
  }
}
