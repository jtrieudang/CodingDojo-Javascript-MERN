import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router, Redirect, Link } from '@reach/router';

import AllAuthors from './views/AllAuthors';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
    <Link to="/authors"> Home</Link>{ ' '}
    <Link to="/authors/new">Add an Author</Link>
    <Router>
      <Redirect from='/' to='/authors' noThrow/>
      <AllAuthors path="authors" />
      <NewAuthor path="authors/new" />
      <EditAuthor path="authors/:id/edit" />
    </Router>
    </div>
  );
}

export default App;