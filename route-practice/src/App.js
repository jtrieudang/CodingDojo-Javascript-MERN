import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Link, Router } from '@reach/router';

import Welcome from './views/Welcome';
import Number from './views/Number';
import Color from './views/Color';



function App() {
  return (
    <div className="App">
      {/* runs on a different page */}
      <Link to='/home'>Welcome</Link>{ ' ' }

      {/* Router, running on the same page*/}
      <Router>
        <Welcome path='home'/>
        <Number path=':id' />
        <Color path=':word/:color1/:color2' />
      </Router>
    </div>
  );
}

export default App;
