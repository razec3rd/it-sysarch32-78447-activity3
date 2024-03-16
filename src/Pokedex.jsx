import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function Pokedex() {
  const [language, setLanguage] = useState("english");
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const url = 'https://us-central1-it-sysarch32.cloudfunctions.net/pokemon';
    fetch(url)
      .then(response => response.json())
      .then(data => setPokemonList(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleClick = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
    <div>
      <button onClick={() => handleClick("english")}>English</button>
      <button onClick={() => handleClick("japanese")}>Japanese</button>
      <button onClick={() => handleClick("chinese")}>Chinese</button>
      <button onClick={() => handleClick("french")}>French</button>
      </div>
      {pokemonList.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          pokemonid={pokemon.id}
          pokemontype={pokemon.type}
          pokemonbase={pokemon.base}
          pokemonname={pokemon.name[language]}
          pokemonimage={pokemon.image}
          basepokemon={pokemon.base}
        />
      ))}
    </>
  );
}
  
  export default Pokedex;