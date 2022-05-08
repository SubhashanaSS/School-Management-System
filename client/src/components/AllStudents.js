import React, { Component } from "react";
import axios from "axios";

import backgroundimg from './images/background.jpg';

export default class AllStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    this.retrieveStudents();
  }

  retrieveStudents() {
    axios.get("http://localhost:8000/students").then((res) => {
      if (res.data.success) {
        this.setState({
          students: res.data.existingStudents,
        });

        console.log(this.state.students);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/student/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveStudents();
    });
  };

  filterData(students, searchKey) {
    const result = students.filter((student) =>
      student.name.toLowerCase().includes(searchKey)
    );
    this.setState({ students: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/students").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingStudents, searchKey);
      }
    });
  };

  render() {
    return (
        <div  styles={{ backgroundImage:`url(${backgroundimg})` }}> 
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Students</h4>
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
            Students info
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
            {this.state.students.map((students, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/student/${students._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {students.name}
                  </a>
                </td>
                <td>{students.address}</td>
                <td>{students.dob}</td>
                <td>{students.gender}</td>
                <td>{students.studentid}</td>
                <td>{students.grade}</td>
                <td>{students.contactno}</td>
                <td>{students.stdemail}</td>
                <td>{students.gdnname}</td>
                <td>{students.gdncontactno}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${students._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(students._id)}
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
            href="/student/save"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Student
          </a>
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className="btn btn-success">
          <a
            href="/studentreport"
            style={{ textDecoration: "none", color: "white" }}
          >
            Generate Student Report
          </a>
        </button>
      </div>
      </div>
    );
  }
}
