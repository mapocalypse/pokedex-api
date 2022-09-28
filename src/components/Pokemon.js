import React from 'react';

const Pokemon = (props) => {
    const {pokemon} = props;

    return(
        <div className="card">
        <div className="card-body">
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} className="card-img-top" ></img>
            <h3 className="card-title pokemon-name-text">#{pokemon.id} - {pokemon.name}</h3>
            <div>
                <div className='pokemon-type'>
                {pokemon.types.map((type, idx) => {
                    return(
                        <h5 key={idx} className="card-text pokemon-type-text">{type.type.name} </h5>
                    )
                })}
                </div>
                <div><p className="card-text">Weight: {pokemon.weight} | Height: {pokemon.height} </p></div>

            </div>
        </div>
    </div>
    )
}

export default Pokemon;