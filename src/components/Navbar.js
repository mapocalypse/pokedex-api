import React from 'react';

const Navbar = () => {
    return(
        <nav>
            <div>
                <img src={require('../images/pokeapi-logo.png')} alt="PokéAPI logo" />
            </div>
        </nav>
    )
};

export default Navbar;