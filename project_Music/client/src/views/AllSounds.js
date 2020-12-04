import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import styles from './keysounds.module.css';

export default function AllSounds(){
    const [sounds, setSounds] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/sounds')
            .then(response => setSounds(response.data))
            .catch(()=> setHasError(true));
    }, []);

    //delete button
    function handleDelete(id){
        axios.delete('http://localhost:8000/api/sounds/' + id)
            .then(()=> setSounds(sounds.filter(sound => sound._id !== id)))
        }

    if(hasError) return 'Something is wrong...';

    //still loading
    if (sounds == null) return "Loading..."

    return(
        <div>
            <h1 styles={styles.h1}>All Sounds</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sounds.map(sound => (
                    <tr key={sound._id}>
                        <td ><Link to={"/sounds/" + sound._id}>{sound.name}</Link></td>
                        <td >{sound.description}</td>
                        <td>
                            {/* on click play */}
                            <button onClick={()=> handleDelete(sound._id)}>Delete Sound</button>{ ' ' }
                            <button onClick={()=> navigate('/sounds/' + sound._id + '/edit')}>Edit Sound</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/sounds/play" className={styles.play}>PLAY YOUR SOUNDS!</Link>
        </div>
    )
}