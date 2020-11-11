import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

export default function AllAuthors(){
    const [authors, setAuthors] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors')
            .then(response => setAuthors(response.data))
            .catch(()=> setHasError(true));
    }, []);

    //delete button
    function handleDelete(id){
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(()=> setAuthors(authors.filter(author => authors._id !== id)))
        }

    if(hasError) return 'Something is wrong...';

    //still loading
    if (authors == null) return "Loading..."

    return(
        <div>
            <h1>All Favorite Authors</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => (
                    <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                            <button onClick={()=> handleDelete(author._id)}>Delete</button>{ ' ' }
                            <button onClick={()=> navigate('/authors/' + author._id + '/edit')}>Edit/Update</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}