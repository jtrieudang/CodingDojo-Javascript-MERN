//edit page NOT THE SINGLE CITY
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { navigate } from '@reach/router';

//refactor method
import CityForm from '../components/CityForm';

export default function EditCity({id}) {
    const [isLoading, setIsLoading] = useState(true);
    // const [name, setName] = useState('');
    // const [population, setPopulation] = useState('');
    // const [imageUrl, setImageUrl] = useState('');
    // const [nice, setNice] = useState(false);
    
    //reform method
    const [city, setCity] = useState(null);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/cities/' + id)
            .then(res => {
                // setName(res.data.name);
                // setPopulation(res.data.population);
                // setImageUrl(res.data.imageUrl);
                // setNice(res.data.nice);

                //reform method
                setCity(res.data);

                setIsLoading(false);
            })
            .catch(console.log);
    }, [id]);

    //handlerfunction
    // function handleSubmit(event){
    //     event.preventDefault();

    //     axios.put('http://localhost:8000/api/cities/' + id, {
    //         name,
    //         population,
    //         imageUrl,
    //         nice
    //     })
    //         .then(()=> navigate('/cities/' + id))
    //         .catch(console.log)
    // }

    if(isLoading) return 'Loading...!';
    // if(city == null) return 'Loading...!';

    return (
        <div>
            {/* reform method */}
            <CityForm
            city={city}
            method="put"
            url={"http://localhost:8000/api/cities/" + id}
            backUrl={'/cities/' +id }
            //id because of the top {id}
            //backUrl can be at a specific page when stating
            />

            {/* <form onSubmit={handleSubmit}>
                <div>
                    <h1>Editing a city</h1>
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