function Pokemon({ pokemonid, pokemonname, pokemontype, pokemonimage }) {
    return (
      <>
        <div className="pokedex">
          <img className="pokedex-image" src={pokemonimage} alt="profile picture" />
          <h2 className="pokedex-title">{pokemonid}{pokemonname}</h2>
          <ul>
            <li className="pokedex-type">{pokemontype}</li>
            <li className="pokedex-type">{pokemontype}</li>
          </ul>
          <div className="pokedex-stats-section">
            <ul>
              <li className="pokedex-stats">HP: </li>
              <li className="pokedex-stats">Speed: </li>
            </ul>
            <ul>
              <li className="pokedex-stats">Attk: </li>
              <li className="pokedex-stats">Sp. Attk: </li>
            </ul>
            <ul>
              <li className="pokedex-stats">Def: </li>
              <li className="pokedex-stats">Sp. Def: </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  
  export default Pokemon;