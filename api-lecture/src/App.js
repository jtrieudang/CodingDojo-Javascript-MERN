import React from 'react';
// import logo from './logo.svg';
//from the library/NODE modules or the installed app, import a router component, redirect is to redirect to a different page, navigate is the function being invoked
import { Link, Router, Redirect, navigate } from '@reach/router';
//if page is not found
import NotFound from './views/NotFound';

import SingleLaunch from './views/SingleLaunch';

import Launches from './views/Launches';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* //like a ahref , its a navigation link that will take us to different places
      THESE ARE JUST LINKS, if this whole 'Link' moved down to the bottom of the page it would be at the bottom of the page*/}
      <Link to='/'>Home</Link>{' '}
      <Link to='launches'>Launches</Link>{' '}
      <Link to='bunk'>Doesn't Exist</Link>{' '}
      {/* button to navigate function to somewhere else, callback- not really calling it*/}
      <button onClick={()=> navigate('/bunk')}>Go to bunk</button>


      {/* where we put our routes, and we want each router to do 
      id = take that value and do something with it, not found if none of the id matches*/}
      {/* RECAP: router is all the component that we want to connect with the url pattern*/}
      <Router>
        <Launches path="launches" />
        {/* we want to have a single path to a specific launch 
        IN DJANGO this was <int:id>,pass integer would be +id or parseInt(id)*/}
        <SingleLaunch path="launches/:id" />
{/* redirect the page(basically, an error if page doesn't exist), noThrow = don't want the route to throw an error and don't want to see the error, SHOULD INCLUDE */}
        <Redirect from='/' to= "launches" noThrow/>
{/* if page is not found none of the ABOVE V V V */}
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
