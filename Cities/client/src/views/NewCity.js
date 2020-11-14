//form to make new cities
// import React, { useState } from 'react';
// import axios from 'axios';
// import { navigate } from '@reach/router';

//refactor method
import React from 'react';

import CityForm from '../components/CityForm';

export default function NewCity(){
    // const [name, setName] = useState('');
    // const [population, setPopulation] = useState('');
    // const [imageUrl, setImageUrl] = useState('');
    // const [nice, setNice] = useState(false);

    // function handleSubmit(event) {
    //     event.preventDefault();

    //     axios.post('http://localhost:8000/api/cities', {
    //         name,
    //         population,
    //         imageUrl,
    //         nice
    //     })
    //         .then(()=> navigate('/cities'))
    //         .catch(console.log)
    // }

    //refactor method
    const newCity = {
        name: '', 
        population: '', 
        imageUrl: '', 
        nice: false 
    }


    return (
        <div>
            {/* <h1>New City</h1> */}
        {/* refactor method */}
            <CityForm 
                city={newCity}
                method="post"
                url="http://localhost:8000/api/cities"
                backUrl="/cities"
            />

            {/* need to make a function V
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
                <button>Submit</button>
            </form> */}
        </div>
    )
}