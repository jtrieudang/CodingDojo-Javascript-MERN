import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function SingleSound(props) {
    const [sound, setSound] = useState(null);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/sounds/' + props.id)
            .then(res => setSound(res.data));
    }, [props.id]);

    //delete
    function handleDelete(id){
        axios.delete('http://localhost:8000/api/sounds/' + id)
            .then(()=>navigate("/sounds"))
        }

    //play sound
    function playSound(id){
        axios.get('http://localhost:8000/api/sounds/' + id)
    }
    if(sound == null) return 'Loading...!';

    return(
        <div>
            <h1>{sound.name}</h1>
            <p>Decription: {sound.description}</p>
            <br/>
            {/* play button */}
            <button onClick={()=> playSound(sound._id)}>Play</button><br/><br/>
            <button onClick={()=> handleDelete(sound._id)}>Delete</button>{ ' ' }
            <button onClick={()=> navigate('/sounds/' + sound._id + '/edit')}>Edit/Update</button>
            
        </div>
    )
}