// showing all cities and actions
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

export default function AllCities(){
    const [cities, setCities] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/cities')
            .then(response => setCities(response.data))
            .catch(()=> setHasError(true));
    }, []);

    //delete button
    function handleDelete(id){
        axios.delete('http://localhost:8000/api/cities/' + id)
            .then(()=> setCities(cities.filter(city => city._id !== id)))
        }

    if(hasError) return 'Something is wrong...';

    //still loading
    if (cities == null) return "Loading..."

    return(
        <div>
            <h1>All Cities</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map(city => (
                    <tr key={city._id}>
                        {/* make name a link */}
                        <td><Link to={"/cities/" + city._id}>{city.name}</Link></td>
                        <td>{city.population}</td>
                        <td>
                            <button onClick={()=> handleDelete(city._id)}>Delete</button>{ ' ' }
                            <button onClick={()=> navigate('/cities/' + city._id + '/edit')}>Edit/Update</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}