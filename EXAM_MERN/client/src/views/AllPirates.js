import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

import classes from './AllPirates.module.css';

export default function AllPirates(){
    const [pirates, setPirates] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => setPirates(res.data))
            .catch(()=> setHasError(true));
    }, []);

    //loading from back
    if (pirates == null) return "Loading...! shiver me timbers!"
    if(hasError) return 'Something is wrong...';


    //view profile
    function handleView(id){
        axios.get('http://localhost:8000/api/pirates/' + id)
            .then(()=> navigate('/pirates/' + id))
        }

    //delete 
    function handleDelete(id){
        axios.delete('http://localhost:8000/api/pirates/' + id)
            .then(()=> setPirates(pirates.filter(pirate => pirate._id !== id)))
        }

        return(
            <div>
                <Link to="/pirates/new">Add Pirate</Link>
                <h1>Pirate Crew </h1>
                <ul>
                    {pirates.map(pirate => (
                        <li key={pirate._id}>
                        <div className={classes.wrapper}>
                            <img src={pirate.imageUrl} alt={pirate.imageUrl} width="100" height="100"/>{ '' }
                            {pirate.name}
                            <button onClick={()=> handleView(pirate._id)}>View Profile</button>
                            <button onClick={()=> handleDelete(pirate._id)}>Walk the Plank</button>{ ' ' }
                        </div><br/>
                        </li>
                        ))}
                </ul>
            </div>
        )
    }