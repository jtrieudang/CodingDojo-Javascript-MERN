import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function SingleCity(props) {
    const [city, setCity] = useState(null);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/cities/' + props.id)
            .then(res => setCity(res.data));
    }, [props.id]);

    //delete
    function handleDelete(id){
        axios.delete('http://localhost:8000/api/cities/' + id)
            .then(()=>navigate("/cities"))
        }

    if(city == null) return 'Loading...!';

    return(
        <div>
            <h1>{city.name}</h1>
            <p>Population: {city.population}</p>
            <p>Is nice? {city.nice ? 'Yes' : 'No'} </p>
            <img src={city.imageUrl} alt={city.name}/>
            {/* edit and delete */}<br/>
            <button onClick={()=> handleDelete(city._id)}>Delete</button>{ ' ' }
            <button onClick={()=> navigate('/cities/' + city._id + '/edit')}>Edit/Update</button>
            
        </div>
    )
}