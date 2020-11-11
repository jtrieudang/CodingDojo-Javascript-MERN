import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function EditCity({id}) {
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);

                setIsLoading(false);
            })
            .catch(console.log);
    }, [id]);

    function handleSubmit(event){
        event.preventDefault();

        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(()=> navigate('/authors'))
            .catch(console.log)
    }

    if(isLoading) return 'Loading...!';

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Editing a city</h1>
                    <label>Name </label>
                    <input name='name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <button>Submit</button>
            </form> 
        </div>
    )
}