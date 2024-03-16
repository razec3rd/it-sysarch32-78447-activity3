import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function Pokedex() {
    
    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {
      fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
        .then(response => response.json())
        .then(data => setPokemonData(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
    return (
      <>
        {pokemonData.map((key) => {
            <Pokemon
              key={key}
              pokemonid={pokemonData.id}
              pokemonname={pokemonData.name}
              pokemontype={pokemonData.type}
              pokemonimage={key.image}
            />
          
        })}
      </>
    );
  }
  
  export default Pokedex;