import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router, Redirect, Link } from '@reach/router';

import AllSounds from './views/AllSounds';
import NewSound from './views/NewSound';
import OneSound from './views/OneSound';
import EditSound from './views/EditSound';
import PlaySounds from './views/PlaySounds';


function App() {
  return (
    <div className="gordon">

    <div className="App" >
    <Link to="/sounds"> <p>All Sounds</p></Link>{ ' '}
    <Link to="/sounds/new"><p>Add a Sound</p></Link>
    <Router>
      <Redirect from='/' to='/sounds' noThrow/>
      <AllSounds path="sounds" />
      <NewSound path="sounds/new" />
      <EditSound path="sounds/:id/edit" />
      <OneSound path="sounds/:id" />
      <PlaySounds path="sounds/play" />
    </Router>
    </div>
    </div>
  );
}

export default App;
