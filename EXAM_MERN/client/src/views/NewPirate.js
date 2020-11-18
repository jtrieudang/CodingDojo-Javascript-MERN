import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

export default function NewPirate() {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [chest, setChest] = useState('');
    const [phrase, setPhrase] = useState('');
    const [position, setPosition] = useState('');
    const [leg, setLeg] = useState(true);
    const [eye, setEye] = useState(true);
    const [hand, setHand] = useState(true);

    //validation
    const [errors, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);

    axios.post('http://localhost:8000/api/pirates', {
        name, imageUrl, chest, phrase, position, leg, eye, hand
        })
        .then(() => navigate('/pirates'))
        .catch(err => {
            const errorResponse= err.response.data.errors;
            const errorsmsg =[];

        for(const key in errorResponse){
            errorsmsg.push(errorResponse[key].message);
        }
        
        setErrors(errorsmsg);
        })
    }

    return (
        <div>
            <Link to="/pirates">Crew Board</Link>
            <h1>Add a pirate</h1>
            {errors.map((err, index)=> (
                <p key={index} style={{ color:'red' }}>{err}</p>
            ))}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label><br/>
                    <input name='name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Image Url:</label><br/>
                    <input name='imageUrl' value={imageUrl} onChange={e=> setImageUrl(e.target.value)} />
                </div>
                <div>
                    <label># of Treasure Chests:</label><br/>
                    <input name='chest' value={chest} type='number' onChange={e => setChest(e.target.value)} />
                </div>
                <div>
                    <label>Pirate Catch Phrase:</label><br/>
                    <input name='phrase' value={phrase} onChange={e=> setPhrase(e.target.value)} />
                </div>
                <div>
                    <label>Crew Position:</label><br/>
                    <select for='position' id='position' value={position} onChange={e=> setPosition(e.target.value)}>
                        <option value="" hidden></option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>
                <div>
                    <input type="checkbox" checked={leg} onChange={e => setLeg(e.target.checked)} />
                    <label>Peg Leg</label>
                </div>
                <div>
                    <input type="checkbox" checked={eye} onChange={e => setEye(e.target.checked)} />
                    <label>Eye Patch</label>
                </div>
                <div>
                    <input type="checkbox" checked={hand} onChange={e => setHand(e.target.checked)} />
                    <label>Hook Hand</label>
                </div>
                <br/>
                <button>Add Pirate</button>
            </form>
        </div>
    )
}