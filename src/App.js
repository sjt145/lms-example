import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './containers/Admin/Dashboard'
import Student from './containers/Admin/Student/Student'
import Course from './containers/Admin/Course/Course'
import Login from './containers/Login/Login'
import NavbarWrap from './components/Navbar/Navbar'
import PrivateRoute from './PrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated)

  return (
    <div className="App">
      <NavbarWrap isAuthenticated={isAuthenticated} />
      <Switch>
        {/* <Route exact path="/login" render={(props) => <Login {...props} />} /> */}
        <Route exact path="/login" component={Login} />

        {/* <Route exact path="/" component={Dashboard} /> */}

        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/course" component={Course} />
        <PrivateRoute path="/student" component={Student} />


        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
