import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router, Redirect } from '@reach/router';

import AllPirates from './views/AllPirates';
import NewPirate from './views/NewPirate';
import OnePirate from './views/OnePirate';

function App() {
  return (
    <div className="App">
    <Router>
      <Redirect from='/' to='/pirates' noThrow/>
      <AllPirates path="pirates" />
      <NewPirate path="pirates/new" />
      <OnePirate path="pirates/:id" />
    </Router>
    </div>
  );
}

export default App;
