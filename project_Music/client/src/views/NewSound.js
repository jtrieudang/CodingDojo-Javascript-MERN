import React from 'react';

import SoundForm from '../components/SoundForm';

export default function NewSound(){
    const newSound = {
        name: '', 
        description: '', 
    }

    return (
        <div>
            <SoundForm 
                sound={newSound}
                method="post"
                url="http://localhost:8000/api/sounds"
                backUrl="/sounds"
            />
        </div>
    )
}