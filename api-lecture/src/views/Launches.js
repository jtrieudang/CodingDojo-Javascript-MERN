import React, { useEffect, useState } from 'react';
//useeffect allows to use side effect on the application which makes a request to a different network;  install a library, will look inside the node module
import axios from 'axios';
//make an 'promise' object request to the get request the API url

import { Link } from '@reach/router';


function Launches() {
    // setting null because we don't have any empty array because we havent got the data back | null means nothing for nothing that's have nothing to provide
    const [launchesArray, setLaunchesArray] = useState(null);
    //show error in the console
    const [hasError, setHasError] = useState(false);

    //


    //make useEffect with a callback function, [] passing an empty array one time  to render one time because you don't want to make too many request(run it on the first page load) QUESTION: if you refresh the page is it rendering each time??
    // if something in array, runs any time that thing changes, we don't want to run it infinite loop
    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches')
            // passing a parameter called response that returns a promise, can be whatever you want it to be but must be the same 'response', .data use for api/axios and data.results https://vimeo.com/417729857/bd217f1609 @ 47mim for pokemon api
            .then(response => setLaunchesArray(response.data))
            .catch(() => setHasError(true));
    }, []);

    //jsx function 
    if (hasError) {
        return (
            <div>
                Something went wrong!
            </div>
        );
    };

    //waiting for promise to load so it's returning loading
    if (launchesArray == null) return 'Loading...';


    return (
        <div>
            <h1>Launches</h1>
            {/* singlelaunch is just a parameter */}
            {launchesArray.map((singlelaunch, i) => {
                //returning jsx, mapping through the mission name
                return (
                    //not passing an index because we're not looking for a single specific flight
                    <div key={i}>
                        <h3>
                            {/* adding the link component, need to make it a javascript expression not a string
                            link is concatated to the flight number */}
                            <Link to={'/launches/' + singlelaunch.flight_number}>
                            {singlelaunch.mission_name}
                            </Link>
                            </h3>
                        <p>Launch Date: {singlelaunch.launch_date_local} </p>
                        {/* conditional render with ternary operation by asking a question and passing null to return if there are no detail on the flight*/}
                        {singlelaunch ? <p>{singlelaunch.details}</p> : null}
                    </div>
                )

            })}
            {/* creating a new array each time
            <button onClick={()=> setLaunchesArray([])}>Click me!</button> */}
        </div>
    )
}

export default Launches;