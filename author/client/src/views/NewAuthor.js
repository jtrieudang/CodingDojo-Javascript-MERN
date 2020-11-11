import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function NewAuthor(){
    const [name, setName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(()=> navigate('/authors'))
            .catch(console.log)
    }

    return (
        <div>
            <h1>New Author</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name </label>
                    <input name='name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}