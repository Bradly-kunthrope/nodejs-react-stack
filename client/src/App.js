import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import Register from './components/login/register';
import Login from './components/login/login';

export default class App extends Component {

  render() {
    return (
    <div>
      <Router>
        <div>
        <Navbar />
        <Route exact path='/register' component= {Register} />
        <Route exact path='/login' component={Login} />
        </div>
      </Router>
    </div>
    )
  }
}

