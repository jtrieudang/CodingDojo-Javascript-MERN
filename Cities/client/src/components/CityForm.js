//refactor when creating a new city
import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
//backUrl can be at a specific page when stating
export default function CityForm({ city, method, url, backUrl }){
    const [name, setName] = useState(city.name);
    const [population, setPopulation] = useState(city.population);
    const [imageUrl, setImageUrl] = useState(city.imageUrl);
    const [nice, setNice] = useState(city.nice);

    //validation
    const [errors, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        //if no error
        setErrors([]);

        // axios({
        //     url, 
        //     data: {
        //     name,
        //     population,
        //     imageUrl,
        //     nice
        //     }
        // })
//use one or the other
        axios[method](url, {
            name,
            population,
            imageUrl,
            nice
        })
            .then(()=> navigate('/cities'))
            //validation
            .catch(err => {
                const errorsmsg =[];
                const ObjectInnerError= err.response.data.errors;

                for(const key in ObjectInnerError){
                    errorsmsg.push(ObjectInnerError[key].message);
                }
                setErrors(errorsmsg);
            })
    }

    return (
        <div>
            <h1>New City</h1>
            {/* errors/validation first one */}
            {/* need to make a function V */}
            {errors.map((err, index)=> (
                <p key={index} style={{ color:'red' }}>{err}</p>
            ))}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name </label>
                    <input name='name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Population </label>
                    <input name='population' value={population} type='number' onChange={e=> setPopulation(e.target.value)} />
                </div>
                <div>
                    <label>ImageUrl </label>
                    <input name='imageUrl' value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                </div>
                <div>
                    <label>Nice? </label>
                    <input type="checkbox" checked={nice} onChange={e => setNice(e.target.checked)} />
                </div>
                {/* cancel button */}
                <button type="button" onClick={()=> navigate(backUrl)}>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}