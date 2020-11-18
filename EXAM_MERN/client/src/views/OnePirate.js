import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

import classes from './AllPirates.module.css';

export default function SinglePirate({id}) {
    const [pirate, setPirate] = useState(null);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/pirates/' + id)
            .then(res => setPirate(res.data));
        }, [id]);

    if(pirate == null) return 'Loading Pirate...ARGGG!';

    return(
        <>
        <div className={classes.block}>
            <Link to="/pirates">Crew Board</Link>
            <h1>{pirate.name}</h1>
            <img src={pirate.imageUrl} alt={pirate.imageUrl}/>
            <h2>"{pirate.phrase}"</h2>
            <br/>
        </div>
        <div className={classes.block}>
            <h1>About</h1>
            <p>Position: {pirate.position}</p>
            <p>Treasures: {pirate.chest}</p>
            <p>Peg Leg: {pirate.leg ? 'Yes' : 'No'}</p>
            <p>Eye Patch: {pirate.eye ? 'Yes' : 'No'}</p>
            <p>Hook Hand: {pirate.hand ? 'Yes' : 'No'}</p>
        </div>
        </>
    )
}