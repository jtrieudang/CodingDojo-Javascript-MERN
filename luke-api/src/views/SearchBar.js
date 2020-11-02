import React, { useState } from 'react';
import { navigate } from '@reach/router';
//to go through a particular ID

function SearchBar() {
    const [formState, setFormState] = useState({
        options: 'people',
        id: ""
    });
//function for onChangeHandler
    function onChangeHandler(event){
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }
//function for onSubmit
    function onSubmitHandler(event){
        event.preventDefault();

        navigate("/" + formState.option + "/" + formState.id)
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <label>Search for: </label>
            <select name="option" value={formState.option} onChange={onChangeHandler}>
                <option value='people'>People</option>
                <option value='planets'>Planet</option>
            </select>
                <label>ID:</label>
                <input name='id' value={formState.id} onChange={onChangeHandler} />
                <button>Search</button>
        </form>
    )
}

export default SearchBar