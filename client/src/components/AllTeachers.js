import React, { Component } from "react";
import axios from "axios";

import backgroundimg from './images/background.jpg';

export default class AllTeachers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teachers: [],
    };
  }
  componentDidMount() {
    this.retrieveTeachers();
  }

  //get all teacher
  retrieveTeachers() {
    axios.get("http://localhost:8000/teachers").then((res) => {
      if (res.data.success) {
        this.setState({
            teachers: res.data.existingTeachers,
        });

        console.log(this.state.teachers);
      }
    });
  }

  //teacher delete
  onDelete = (id) => {
    axios.delete(`http://localhost:8000/teacher/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveTeachers();
    });
  };

  //teacher search
  filterData(teachers, searchKey) {
    const result = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchKey)
    );
    this.setState({ teachers: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/teachers").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingTeachers, searchKey);
      }
    });
  };

  render() {
    return (
        <div  styles={{ backgroundImage:`url(${backgroundimg})` }}> 
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Teacher</h4>
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
            Teacher info
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
              <th scope="col">Phonenumber</th>
              <th scope="col">Teacherid</th>
              <th scope="col">Dob</th>
              <th scope="col">Higher Education</th>
              <th scope="col">Subject</th>
              <th scope="col">Yos</th>
            </tr>
          </thead>
          <tbody>
            {this.state.teachers.map((teachers, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/teacher/${teachers._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {teachers.name}
                  </a>
                </td>
                <td>{teachers.address}</td>
                <td>{teachers.phoneno}</td>
                <td>{teachers.teacherid}</td>
                <td>{teachers.dob}</td>
                <td>{teachers.higherstudies}</td>
                <td>{teachers.subject}</td>
                <td>{teachers.yos}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${teachers._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(teachers._id)}
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
            href="/teacher/save"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Teacher
          </a>
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className="btn btn-success">
          <a
            href="/teacherreport"
            style={{ textDecoration: "none", color: "white" }}
          >
            Generate Teacher Report
          </a>
        </button>
      </div>
      </div>
    );
  }
}
