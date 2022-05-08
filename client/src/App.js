import React, {Component} from 'react';
import{BrowserRouter,Route} from 'react-router-dom';

import AllStudents from './components/AllStudents';
import CreateStudent from './components/CreateStudent';
import StudentDetails from './components/StudentDetails';
import GenerateReportStudent from './components/GenerateReportStudent'
import EditStudent from './components/EditStudent';

import AllTeachers from './components/AllTeachers';
import CreateTeacher from './components/CreateTeacher';
import TeacherDetails from './components/TeacherDetails';
import GenerateReportTeacher from './components/GererateReportTeacher';
import EditTeacher from './components/EditTeacher';

import AllStaffs from './components/AllStaffs';
import CreateStaff from './components/CreateStaff';
import StaffDetails from './components/StaffDetails';
import GenerateReportStaff from './components/GenerateReportStaff'
import EditStaff from './components/EditStaff';

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="container-fluid">

        <Route path="/student" exact component={AllStudents}></Route>
        <Route path="/student/save"  component={CreateStudent}></Route>
        <Route path="/student/:id" component={StudentDetails}></Route>
        <Route path="/studentreport" component={GenerateReportStudent}></Route>
        <Route path="/edit/:id" component={EditStudent}></Route>

        <Route path="/teacher" component={AllTeachers}></Route>
        <Route path="/teacher/save"  component={CreateTeacher}></Route>
        <Route path="/teacher/:id" component={TeacherDetails}></Route>
        <Route path="/teacherreport" component={GenerateReportTeacher}></Route>
        <Route path="/edit/:id" component={EditTeacher}></Route>

        <Route path="/staff" component={AllStaffs}></Route>
        <Route path="/staff/save"  component={CreateStaff}></Route>
        <Route path="/staff/:id" component={StaffDetails}></Route>
        <Route path="/staffreport" component={GenerateReportStaff}></Route>
        <Route path="/edit/:id" component={EditStaff}></Route>

      </div>

      </BrowserRouter>
    )
  }
} 

