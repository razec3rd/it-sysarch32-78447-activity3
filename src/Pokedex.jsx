function Pokedex(){
    return(
        
        <><nav>
            <ul>
                <li><a href="#">English</a></li>
                <li><a href="#">Japanese</a></li>
                <li><a href="#">Chinese</a></li>
                <li><a href="#">French</a></li>
            </ul>
        </nav>
        
        <div className="pokedex">
                <img className="pokedex-image" src="https://it-sysarch32.web.app/assets/001.png" alt='profile picture'></img>
                <h2 className="pokedex-title">[001]Bulbasaur</h2>
                <p className="pokedex-text">Grass</p>
            </div></>
        );
    }       

export default Pokedex