import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Dashboard from '../Dashboard/Dashboard';
import ManageOwners from '../ManageOwners/ManageOwners';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/manage-owners" component={ManageOwners} />
      </div>
    </Router>
  );
}

export default App;
