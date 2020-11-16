//this page is to see each launch
import React, { useEffect, useState } from 'react';
//need library from axios
import axios from 'axios';

//props was decstructing and replaced with { object } object = 'id' for here. ID came from the path in the app.js
// inside the { id } will always be a string
function SingleLaunch({ id }){
    //request for launch data, null because we don't have anything yet
    const [launch, setLaunch] = useState(null);
    // parseInt(id); //returns an integer
    // +id; // also returns an integer

    useEffect(() => {
        //callback with a promise
        axios.get('https://api.spacexdata.com/v3/launches/'+ id)
        //to get the value out you need to do the .then, force react to re-render the components, its an object
        .then(response => setLaunch(response.data))
        //in case we catch an error
        .catch(console.log)
        //[] = render it once, one time
    }, []);

    //if check, can make it fancy 
    if(launch == null) return 'LOADING...';

    return(
        //id is from the path in app in SingleLaunch which is the routing parameter
        <div>
            {/* details about the launch */}
            <h1> { launch.mission_name }</h1>
            <h3> {launch.rocket.rocket_name}</h3>
            <p> {launch.details} </p>
        </div>
    );
};

export default SingleLaunch;