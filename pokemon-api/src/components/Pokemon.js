import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Poke() {
    const [PokemonArray, setPokemonArray] = useState([]);

    //FOR API
    // function clickHandler(){
    //     fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
    //     .then(response=>response.json())
    //     .then(response=>setPokemonArray(response.results))
    // };

    // FOR AXIOS
    function clickHandler(){
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response=>setPokemonArray(response.data.results))
    };

    return (
        <div>
            <h1>Pokemons</h1>
            <button onClick={clickHandler}>Fetch Pokemons!</button>
            {PokemonArray.map((singlePokemon, i) => {
                return (
                    <div key={i}>
                        <li>{singlePokemon.name}</li>
                    </div>
                )
            })}
        </div>
    )
}

export default Poke;