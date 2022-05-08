import React, {Component} from 'react';
import{BrowserRouter,Route} from 'react-router-dom';

import AllStudents from './components/AllStudents';
import CreateStudent from './components/CreateStudent';
import StudentDetails from './components/StudentDetails';
import GenerateReportStudent from './components/GenerateReportStudent'
import EditStudent from './components/EditStudent';

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="container-fluid">

        
        <Route path="/student" exact component={AllStudents}></Route>
        <Route path="/student/save"  component={CreateStudent}></Route>
        <Route path="/student/:id" component={StudentDetails}></Route>
        <Route path="/studentreport" component={GenerateReportStudent}></Route>
        <Route path="/studentreport" component={GenerateReportStudent}></Route>
        <Route path="/edit/:id" component={EditStudent}></Route>

      </div>

      </BrowserRouter>
    )
  }
} 

