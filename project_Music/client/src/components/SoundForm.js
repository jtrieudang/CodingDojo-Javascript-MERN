import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import styles from './keysounds.module.css';

//find api to add to use beats

export default function SoundForm({ sound, method, url, backUrl }){
    const [name, setName] = useState(sound.name);
    const [description, setDescription] = useState(sound.description);

    //validation
    const [errors, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);

        axios[method](url, {
            name,
            description
        })
            .then(()=> navigate('/sounds'))
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
            <h1>New Sound</h1>
            {errors.map((err, index)=> (
                <p key={index} style={{ color:'red' }}>{err}</p>
            ))}
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={styles.lab}>Sound Name: </label>
                    <input name='name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label className={styles.lab}>Description: </label>
                    <input name='description' value={description} onChange={e=> setDescription(e.target.value)} />
                </div>
                {/* upload */}
                <h1>Upload sound</h1>
                <form action="/upload" method="POST" enctype="multipart/form-data">
                    <input type="file" name="file" id="file"></input>
                </form>
                {/* cancel button */}
                <button type="button" onClick={()=> navigate(backUrl)}>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}