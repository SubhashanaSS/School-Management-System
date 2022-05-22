import React, { Component } from "react";
import axios from "axios";

import backgroundimg from './images/background.jpg';

export default class AllCourses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }
  componentDidMount() {
    this.retrieveCourses();
  }

  retrieveCourses() {
    axios.get("http://localhost:8000/courses").then((res) => {
      if (res.data.success) {
        this.setState({
          courses: res.data.existingCourses,
        });

        console.log(this.state.courses);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/course/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveCourses();
    });
  };

  filterData(courses, searchKey) {
    const result = courses.filter((course) =>
    course.name.toLowerCase().includes(searchKey)
    );
    this.setState({ courses: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/course").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingCourses, searchKey);
      }
    });
  };

  render() {
    return (
        <div  styles={{ backgroundImage:`url(${backgroundimg})` }}> 
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Courses</h4>
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
            Courses info
          </p>
        </div>
        <table
          className="table table-hover"
          style={{ marginTop: "40px", background: "LightGray" }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">courseid</th>
              <th scope="col">coursename</th>
              <th scope="col">tic</th>
              <th scope="col">coursegpa</th>
              <th scope="col">course Duration</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((courses, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/student/${courses._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {courses.courseid}
                  </a>
                </td>
                <td>{courses.coursename}</td>
                <td>{courses.tic}</td>
                <td>{courses.coursegpa}</td>
                <td>{courses.courseduration}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${courses._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(courses._id)}
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
            href="/course/save"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New course
          </a>
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className="btn btn-success">
          <a
            href="/coursereport"
            style={{ textDecoration: "none", color: "white" }}
          >
            Generate course Report
          </a>
        </button>
      </div>
      </div>
    );
  }
}
