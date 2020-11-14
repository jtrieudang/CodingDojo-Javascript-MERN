import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router, Redirect, Link } from '@reach/router';

import AllCities from './views/AllCities';
import NewCity from './views/NewCity';
import SingleCity from './views/SingleCity';
import EditCity from './views/EditCity';

function App() {
  return (
    <div className="App">
    <Link to="/cities"> All Cities</Link>{ ' '}
    <Link to="/cities/new">Create a City</Link>
    <Router>
      <Redirect from='/' to='/cities' noThrow/>
      <AllCities path="cities" />
      <NewCity path="cities/new" />
      <EditCity path="cities/:id/edit" />
      <SingleCity path="cities/:id" />
    </Router>
    </div>
  );
}

export default App;
