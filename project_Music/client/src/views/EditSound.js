import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SoundForm from '../components/SoundForm';

export default function EditSound({id}) {
    const [isLoading, setIsLoading] = useState(true);
    const [sound, setSound] = useState(null);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/sounds/' + id)
            .then(res => {
                setSound(res.data);

                setIsLoading(false);
            })
            .catch(console.log);
    }, [id]);

    if(isLoading) return 'Loading...!';

    return (
        <div>
            <SoundForm
            sound={sound}
            method="put"
            url={"http://localhost:8000/api/sounds/" + id}
            backUrl={'/sounds/' +id }
            />
        </div>
    )
}